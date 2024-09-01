import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DrawerAppBar from '../components/DrawerAppBar';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


const ProjectUpsert = (props) => {

    const { id } = props.match.params;
    const apiUrl = 'http://localhost:3001/projects';

    const [ inputData, setInputData ] = useState({projectName: '',
                                                  mainImage: '',
                                                  shortDescription: '', 
                                                  url: '', 
                                                  }); 

    const history = useHistory();

    const { handleSubmit, control, reset, setValue } = useForm({defaultValues: inputData}); //pass in an object with default values from input data

    // loads data - similar to componentDidMount()
    useEffect( () => {
        console.log("useEffect: ", inputData);
        // fetch data 
        if (id) {
            const getApiData = () => {
                fetch(apiUrl + '/' + id, {method: "GET"})
                    .then(response => response.json())
                    .then(data => loadData(data));
            };
            getApiData();
        }
    }, []);

    const loadData = (data) => {
        console.log('loadData:', data);
        setInputData(data);
        reset({
            projectName: data.projectName,
            shortDescription: data.shortDescription,
            mainImage: data.mainImage,
            url: data.url            
        });
    };

    const onSubmit = data => {
        let method = "GET";
        let url = "";

        //Rest API
        if (!id) {
            // post new
            method = "POST";
            url = apiUrl;
            
        } else {
            // put change
            method = "PUT";
            url = apiUrl + '/' + id;
        }

        fetch(url,
                {method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
        )
        .then(response => response.json())
        .then(data => loadData(data))
        .then(res => {
            history.push("/admin");
        });
    };

    return (
        <div>
            <DrawerAppBar title="Admin Project Form" />    
            <div style={{width: "70%", margin: "auto", paddingTop: 80}}>
                <form  noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Controller name="projectName" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1, input: { color: 'white' } }} label="Project Name" InputLabelProps={{style: { color: 'white' }}} fullWidth value={inputData.projectName} {...field} />
                        )} />
                    
                        <Controller name="shortDescription" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1}} label="Short Description" InputProps={{style: { color: 'white' }}} InputLabelProps={{style: { color: 'white' }}} fullWidth value={inputData.shortDescription} {...field} multiline minRows='5' maxRows='5'/>
                        )} />
                        
                        <Controller name="mainImage" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1, input: { color: 'white' } }} label="Main Image" InputLabelProps={{style: { color: 'white' }}} fullWidth value={inputData.mainImage} {...field} />
                        )} />

                        <Controller name="url" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1, input: { color: 'white' } }} label="URL" InputLabelProps={{style: { color: 'white' }}} fullWidth value={inputData.url} {...field} />
                        )} />
                        
                        <Button id="submitButton" variant="contained" color="primary" type="submit">Submit</Button>
                    </div>
                </form>  
            </div>  
        </div>
    );
};

export default ProjectUpsert;