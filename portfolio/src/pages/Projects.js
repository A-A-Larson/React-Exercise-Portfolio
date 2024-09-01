import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import DrawerAppBar from '../components/DrawerAppBar';

const Projects = () => {

    const [ rows, setRows ] = useState([]); //set rows to empty array
    const apiUrl = 'http://localhost:3001/projects';
    const history = useHistory();

    // similar to componentDidMount()
    useEffect( () => {
        // Go get data
        // fetch data 
        getApiData();
        // eslint-disable-next-line
    }, []);

    const getApiData = () => {
        fetch(apiUrl, {method: "GET"})
            .then(response => response.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setRows(data);
    };

        
    return (
        <>
            <DrawerAppBar title="Projects" />        
            <Container sx={{ mt: 10, pb: 10 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {rows.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card cardid={card.id} sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <CardActionArea href={card.url}>
                                        <CardMedia 
                                            component="img"
                                            sx={{margin: 'auto'}}
                                            image={card.mainImage}
                                            alt={card.shortDescription}
                                            projectName={card.projectName}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography align="left" variant="h5" component="h2" gutterBottom >
                                            {card.projectName} 
                                            </Typography>
                                            <Typography align="left">
                                                {card.shortDescription}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
               </Container>
        </>
    );
};
export default Projects;