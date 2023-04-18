import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { faker } from "@faker-js/faker";

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    endpoints(builder) {
        return {
            // addAlbum: builder.mutation({
            //     query: (user) => {
            //         return {
            //             url: "/albums",
            //             body: {
            //                 userId: user.id,
            //                 title: faker.name.firstName(),
            //             },
            //             method: "POST",
            //         };
            //     },
            // }),
            // deleteAlbum: builder.mutation({
            //     query: (user) => {
            //         return {
            //             url: "/albums",
            //             params: {
            //                 userId: user.id,
            //             },
            //             method: "DELETE",
            //         };
            //     },
            // }),
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: "/albums",
                        params: {
                            userId: user.id,
                        },
                        method: "GET",
                    };
                },
            }),
        };
    },
});

export { albumsApi };
export const {
    useFetchAlbumsQuery,
    /*  useAddAlbumMutation,
    useDeleteAlbumMutation,*/
} = albumsApi;
