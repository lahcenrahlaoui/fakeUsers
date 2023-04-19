import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { faker } from "@faker-js/faker";

const stop = (time) => {
    return new Promise((res) => {
        res(time);
    });
};

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        fetchFn: async (...args) => {
            await stop(1000);
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: "Album", id: user.id }];
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        body: {
                            userId: user.id,
                            title: faker.name.firstName(),
                        },
                        method: "POST",
                    };
                },
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "Album", id: album.userId }];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: "DELETE",
                    };
                },
            }),
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    return [{ type: "Album", id: user.id }];
                },
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
    useAddAlbumMutation,
    useDeleteAlbumMutation,
} = albumsApi;
