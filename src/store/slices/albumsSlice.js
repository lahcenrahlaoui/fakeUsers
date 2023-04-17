import { createSlice } from "@reduxjs/toolkit";



const albumsSlice = createSlice({
    name: "album",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    reducers: {},
});


export const albumsReducer = albumsSlice.reducer