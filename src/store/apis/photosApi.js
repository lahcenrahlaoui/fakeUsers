import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
const photosApi = createApi({
    reducerPath: "/photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo) => {
                        return { type: "Photo", id: photo.id };
                    });
                    tags.push({ type: "AlbumsPhotos", id: album.id });
                    return tags;
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id,
                        },
                        method: "GET",
                    };
                },
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "AlbumsPhotos", id: album.id }];
                },

                query: (album) => {
                     
                    return {
                        url: "/photos",
                        body: {
                            albumId: album.id,
                            src: faker.image.transport(640, 640, true),
                        },
                        method: "POST",
                    };
                },
            }),
            deletePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: "AlbumsPhotos", id: photo.id }];
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE",
                    };
                },
            }),
        };
    },
});

export { photosApi };
export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useDeletePhotoMutation,
} = photosApi;
