import React from "react";

import AlbumItem from "../AlbumItem/AlbumItem";

// import { useSelector } from "react-redux";

import { useFetchAlbumsQuery } from "../../store";
import LoadingData from "../LoadingData/LoadingData";

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log(data, error, isLoading);

    let content;
    if (isLoading) {
        content = <LoadingData loop={3} />;
    } else if (error) {
        content = <div>error</div>;
    } else {
        content = data.map((album) => {
            return (
                <React.Fragment key={album.id}>
                    {user.id === album.userId && (
                        <AlbumItem album={album} user={user} />
                    )}
                </React.Fragment>
            );
        });
    }

    return <div className="p-2 rounded-b-md">{content}</div>;
};

export default AlbumsList;
