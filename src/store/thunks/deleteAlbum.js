import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteAlbum = createAsyncThunk("album/delete", async (album) => {
    await stop(1000);
    const response = await axios.delete(
        `http://localhost:3001/albums/${album.id}`
    );

    return album.id;
});
// helper
const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};

export { deleteAlbum };
