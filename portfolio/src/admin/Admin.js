import React, { useState, useEffect } from 'react';
import DrawerAppBar from '../components/DrawerAppBar';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom';

const Admin = () => {
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

    const getId = (params) => {
        return `${params.id}`;
    }

    const handleCreate = () => {
        history.push("/project/create");
    }

    const handleEdit = (e) => {
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('edit item:' + itemId);
        history.push("/project/edit/" + itemId);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('delete item:' + itemId);
        fetch(apiUrl + '/' + itemId, {method: "DELETE"})
            .then(response => response.json())
            .then(res => { //reloads data after deleting
                getApiData();
            });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 30},
        { field: 'projectName', headerName: 'Project Name', width: 120, editable: true},
        { field: 'shortDescription', headerName: 'Short Desc',  width: 260, editable: true},
        { field: 'mainImage', headerName: 'Image', width: 220, editable: true},
        { field: 'url', headerName: 'Link', width: 220, editable: true},
        { field: 'Edit', headerName: 'Edit', width: 140, valueGetter: getId, renderCell: (params) => (
            <>
                <Button variant="contained" id='editButton' size="small" onClick={handleEdit}>Edit</Button>
                <Button variant="contained" id='deleteButton' size="small" onClick={handleDelete}>Delete</Button>
            </>
        )}
    ];

    return (
        <>
            <DrawerAppBar title="Admin" />   
            <div style={{ width: "95%", margin: 'auto', paddingTop: 80, paddingBottom: 20 }}>
                <Button variant="contained" id='createButton' sx={{mb: 1}} onClick={handleCreate}>Add Project</Button>
                <DataGrid sx={{ color: 'white'}} rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5, 10, 25]} checkboxSelection/>
            </div>
        </>
    );
};

export default Admin;