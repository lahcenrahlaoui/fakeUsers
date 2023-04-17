import React from "react";

import AlbumItem from "../AlbumItem/AlbumItem";

import { useSelector } from "react-redux";

const AlbumsList = ({ user }) => {
    const { data } = useSelector((state) => {
        return state.albums;
    });

    const albums = data.map((album) => {
        return (
            <React.Fragment key={album.id}>
                {user.id === album.userId && (
                    <AlbumItem album={album} user={user} />
                )}
            </React.Fragment>
        );
    });

    return <div className="p-2 rounded-b-md">{albums}</div>;
};

export default AlbumsList;
