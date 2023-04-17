import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchPhotos = createAsyncThunk("photos/fetch" , async (album) =>{
    console.log(album.id)
    const response = await axios.get(`http://localhost:3001/photos?albumId=${album.id}`)



    return response.data
})

export { fetchPhotos}