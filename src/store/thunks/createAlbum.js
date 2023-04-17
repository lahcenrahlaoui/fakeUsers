import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const createAlbum = createAsyncThunk("albums/fetch", async (userId) => {
    const response = await axios.post('http://localhost:3001/albums', {
        userId: userId,
    });
    console.log(response.data)
    return response.data;
});

export { createAlbum };
