import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const fetchAlbums = createAsyncThunk("albums/fetch", async (user) => {

    await stop(1000)
    const response = await axios.get(`http://localhost:3001/albums?userId=${user.id}`);
    
    
    return response.data;
});

// helper
const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};


export { fetchAlbums };
