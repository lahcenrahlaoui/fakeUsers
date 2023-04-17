import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createPhoto = createAsyncThunk("photos/create", async (album) => {
    const response = await axios.post("http://localhost:3001/photos", {
        albumId: album.id,
        imgUrl: faker.image.image(),
    });

    return response.data;
});

export { createPhoto };
