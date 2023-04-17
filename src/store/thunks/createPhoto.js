import  { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const createPhoto = createAsyncThunk('photos/create' , async ()=>{
    const response = await axios.post('http://localhost:3001/photos')

    return response.data
})


export {createPhoto}