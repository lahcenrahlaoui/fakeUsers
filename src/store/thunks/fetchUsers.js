import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
    // const response = await axios.get("http://localhost:3001/users");
    const response = await axios.get("https://my-json-server.typicode.com/lahcenrahlaoui/fakeUsersDB/users");
    // call helper 
    await stop(1000)
    return response.data;
});

// helper
const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};

export { fetchUsers };
