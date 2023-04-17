import { createSlice } from "@reduxjs/toolkit";

import { createAlbum } from "../thunks/createAlbum";
import { fetchAlbums } from "../thunks/fetchAlbums";

const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(createAlbum.pending, (state, action) => {
            // console.log(action.payload);

        });
        builder.addCase(createAlbum.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });
        builder.addCase(createAlbum.rejected, (state, action) => {
            state.error = action.error;
        });

        // fetching album 
        builder.addCase(fetchAlbums.pending, (state, action) => {

        });
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            
            state.data = state.data.concat(action.payload)
            
        });
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.error = action.error;
        });
    },
});

export const albumsReducer = albumsSlice.reducer;
