import React, { useEffect, useState } from "react";

import ExpandPanel from "../ExpandPanel/ExpandPanel";
import Button from "../Button/Button";
import { useThunk } from "../../hooks/useThunk";
import { GoX, GoSync } from "react-icons/go";

import { createPhoto, fetchPhotos } from "../../store";
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";

const AlbumItem = ({ user, album }) => {
    const [displaySlider, setDisplaySlider] = useState(false);

    const [doFetchPhotos, isFetchingPhotos, fetchingPhotoError] =
        useThunk(fetchPhotos);

    const [doCreatingPhoto, isCreatingPhoto, deletingPhotoError] =
        useThunk(createPhoto);

    const [doDeletingAlbum, isDeletingAlbum, deletingAlbumError] = useThunk();

    const handleCreatePhoto = () => {
        doCreatingPhoto(album);
    };

    const handleDeleteAlbum = () => {
        doDeletingAlbum(album);
    };

    const { data } = useSelector((state) => {
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

    const s = data.some((item) => {
        return item.albumId === album.id;
    });
    useEffect(() => {
        setDisplaySlider(s);
    }, [s]);
    return (
        <ExpandPanel header={header} onClick={doFetchPhotos} data={album}>
            <div className="flex justify-between">
                {`Photos in ${album.albumName} `}
                <Button danger onClick={handleCreatePhoto}>
                    +Photo
                </Button>
            </div>

            {displaySlider && (
                <div className="flex 0 p-2">
                    <Slider list={data} album={album} />
                </div>
            )}
        </ExpandPanel>
    );
};

export default AlbumItem;
