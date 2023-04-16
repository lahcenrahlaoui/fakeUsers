import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("users/delete", async (id) => {
    const response = await axios.delete(`http://localhost:3001/users/${id}`);
    
    return id;
});

export { deleteUser };
