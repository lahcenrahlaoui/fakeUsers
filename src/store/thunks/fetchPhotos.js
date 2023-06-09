import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPhotos = createAsyncThunk("photos/fetch", async (album) => {
    await stop(1000);

    const response = await axios.get(
        `http://localhost:3001/photos?albumId=${album.id}`
    );

    return response.data;
});

// helper
const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};

export { fetchPhotos };
