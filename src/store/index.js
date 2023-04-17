import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsReducer,
    },
});


export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/deleteUser'
export * from './thunks/fetchAlbums'
export * from './thunks/createAlbum'

export { store };