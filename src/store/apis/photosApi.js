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
                query: (album) => {
                    return {
                        url: "/photos",
                        body: {
                            albumId: album.id,
                            src: faker.image.food(640, 480, true),
                        },
                        method: "POST",
                    };
                },
            }),
            deletePhoto: builder.mutation({
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


export {photosApi}
export const { useFetchPhotosQuery , useAddPhotoMutation , useDeletePhotoMutation } = photosApi