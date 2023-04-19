import React from "react";

import AlbumItem from "../AlbumItem/AlbumItem";
import { GoX, GoSync } from "react-icons/go";

import {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useDeleteAlbumMutation,
} from "../../store";
import LoadingData from "../LoadingData/LoadingData";
import Button from "../Button/Button";

const AlbumsList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };
    let content;
    if (isFetching) {
        content = <LoadingData loop={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>error</div>;
    } else {
        content = data.map((album) => {
            return <AlbumItem key={album.id} album={album} />;
        });
    }

    return (
        <div className="p-2 rounded-b-md ">
            <div className="pb-2 flex justify-between">
                {`Aalbums by ${user.name.split(" ")[0]}`}
                <Button
                    className="w-20 justify-center"
                    loading={results.isLoading}
                    danger
                    onClick={handleAddAlbum}
                >
                    +Album
                </Button>
            </div>
            {content}
        </div>
    );
};

export default AlbumsList;
