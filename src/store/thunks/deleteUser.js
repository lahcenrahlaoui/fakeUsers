import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("users/delete", async (user) => {
    await stop(2000)
    const response = await axios.delete(`http://localhost:3001/users/${user.id}`);
    
    return user.id;
});

// helper
const stop = (time) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};
export { deleteUser };
