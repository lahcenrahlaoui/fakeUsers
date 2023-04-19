import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { usersReducer } from "./slices/usersSlice";
// import { albumsReducer } from "./slices/albumsSlice";
import { photosReducer } from "./slices/photosSlice";


import { albumsApi } from "./apis/albumsApi";


const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]:  albumsApi.reducer,
        // albums: albumsReducer,
        photos: photosReducer,
    },
    middleware :(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(albumsApi.middleware)
    }
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";

// export * from "./thunks/fetchAlbums";
// export * from "./thunks/createAlbum";
// export * from "./thunks/deleteAlbum";

export * from "./thunks/fetchPhotos"
export * from "./thunks/createPhoto"
// export * from "./thunks/deletePhoto"



setupListeners(store.dispatch)

export { useFetchAlbumsQuery , useAddAlbumMutation , useDeleteAlbumMutation} from "./apis/albumsApi"

export { store };
