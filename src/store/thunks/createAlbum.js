import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { faker } from "@faker-js/faker";


const createAlbum = createAsyncThunk("albums/create", async (userId) => {
    const response = await axios.post('http://localhost:3001/albums', {
        userId: userId,
        albumName :faker.music.genre()
    });
    console.log(response.data)
    return response.data;
});

export { createAlbum };
