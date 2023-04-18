import { createSlice } from "@reduxjs/toolkit";

import { createAlbum } from "../thunks/createAlbum";
import { fetchAlbums } from "../thunks/fetchAlbums";
import { deleteAlbum } from "../thunks/deleteAlbum";

const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    extraReducers(builder) {
        // fetching album
        builder.addCase(fetchAlbums.pending, (state, action) => {});
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.data = state.data.concat(action.payload);
        });
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.error = action.error;
        });
        // creating
        builder.addCase(createAlbum.pending, (state, action) => {
            // console.log(action.payload);
        });
        builder.addCase(createAlbum.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });
        builder.addCase(createAlbum.rejected, (state, action) => {
            state.error = action.error;
        });

        // deleting
        // fetching album
        builder.addCase(deleteAlbum.pending, (state, action) => {});
        builder.addCase(deleteAlbum.fulfilled, (state, action) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload
            );
        });
        builder.addCase(deleteAlbum.rejected, (state, action) => {
            state.error = action.error;
        });
    },
});

export const albumsReducer = albumsSlice.reducer;
