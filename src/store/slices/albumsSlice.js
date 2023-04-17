import { createSlice } from "@reduxjs/toolkit";

import { createAlbum } from "../thunks/createAlbum";

const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(createAlbum.pending, (state , action) => {
            console.log("gggg")
            console.log(action.payload)
            // state.data.push(action.payload)
        });
        builder.addCase(createAlbum.fulfilled, (state , action) => {
            console.log("gggg")
            console.log(action.payload)
            // state.data.push(action.payload)
        });
        builder.addCase(createAlbum.rejected, (state , action) => {
            console.log("gggg")
            console.log(action.payload)
            // state.data.push(action.payload)
        });
    },
});

export const albumsReducer = albumsSlice.reducer;
