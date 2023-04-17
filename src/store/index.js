import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";
import { photosReducer } from "./slices/photosSlice";
const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsReducer,
        photos: photosReducer,
    },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";

export * from "./thunks/fetchAlbums";
export * from "./thunks/createAlbum";

export * from "./thunks/fetchPhotos"
export * from "./thunks/createPhoto"

export { store };
