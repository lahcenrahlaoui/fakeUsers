import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const fetchAlbums = createAsyncThunk("albums/fetch", async (user) => {

    const response = await axios.get(`http://localhost:3001/albums?userId=${user.id}`);
    
    
    return response.data;
});

export { fetchAlbums };
