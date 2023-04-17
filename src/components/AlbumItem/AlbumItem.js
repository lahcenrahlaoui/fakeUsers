import React from "react";

import ExpandPanel from "../ExpandPanel/ExpandPanel";
import Button from "../Button/Button";
import { useThunk } from "../../hooks/useThunk";
import { GoX, GoSync } from "react-icons/go";

import { createPhoto, fetchPhotos } from "../../store";
import { useSelector } from "react-redux";

const AlbumItem = ({ user, album }) => {
    const [doFetchPhotos, isFetchingPhotos, fetchingPhotoError] =
        useThunk(fetchPhotos);

    const [doCreatingPhoto, isCreatingPhoto, deletingPhotoError] = useThunk(createPhoto);

    const [doDeletingAlbum, isDeletingAlbum, deletingAlbumError] = useThunk();

    const handleCreatePhoto = () => {
        doCreatingPhoto(album);
    };

    const handleDeleteAlbum = () => {
        doDeletingAlbum(album);
    };

    const { data } = useSelector((state) => {
        console.log(state.photos);
        return state.photos;
    });

    const header = (
        <>
            <div className="flex items-center justify-center mr-4">
                {!isDeletingAlbum ? (
                    <GoX
                        className="text-red-400 hover:text-red-700"
                        onClick={handleDeleteAlbum}
                    />
                ) : (
                    <GoSync className="animate-spin text-red-400" />
                )}
                {album.albumName}
            </div>
        </>
    );
    const pics = data.map((photo) => {
        return (
            <React.Fragment key={photo.id}>
                {album.id === photo.albumId && (
                    <img src={photo.imgUrl} alt={photo.imgUrl} width="50" height="50" />
                )}
            </React.Fragment>
        );
    });
    // const pics = "/////////////"
    const handleAddPhoto = () => {};
    return (
        <ExpandPanel header={header} onClick={doFetchPhotos} data={album}>
            <div className="flex justify-between">
                {`Photos in ${album.albumName} `}
                <Button danger onClick={handleCreatePhoto}>
                    +Photo
                </Button>
            </div>

            {pics}
        </ExpandPanel>
    );
};

export default AlbumItem;
