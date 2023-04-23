import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
    await stop(1000);
    // const response = await axios.post("http://localhost:3001/users", {
    const response = await axios.post(
        "https://my-json-server.typicode.com/lahcenrahlaoui/fakeUsersDB/users",
        {
            name: faker.name.fullName(),
        }
    );
    return response.data;
});

const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};

export { addUser };
