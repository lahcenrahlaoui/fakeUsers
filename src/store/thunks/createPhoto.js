import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createPhoto = createAsyncThunk("photos/create", async (album) => {
    stop(1000)
    const response = await axios.post("http://localhost:3001/photos", {
        albumId: album.id,
        imgUrl: faker.image.food(640, 480, true)

    });

    return response.data;
});
// helper
const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};

export { createPhoto };
