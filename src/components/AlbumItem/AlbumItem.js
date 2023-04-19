import ExpandPanel from "../ExpandPanel/ExpandPanel";

import { GoX, GoSync } from "react-icons/go";

import { useDeleteAlbumMutation, useFetchPhotosQuery } from "../../store";

import PhotosList from "./../PhotosList/PhotosList";

const AlbumItem = ({ album }) => {
    const [deleteAlbum, results] = useDeleteAlbumMutation();

    const handleDeleteAlbum = (album) => {
        deleteAlbum(album);
    };
    const header = (
        <>
            <div className="flex items-center justify-center mr-4">
                {!results.isLoading ? (
                    <GoX
                        className="text-red-400 hover:text-red-700"
                        onClick={() => handleDeleteAlbum(album)}
                    />
                ) : (
                    <GoSync className="animate-spin text-red-400" />
                )}
            </div>
            {results.error && "error delete "}
            {album.title}
        </>
    );
    return (
        <ExpandPanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandPanel>
    );
};

export default AlbumItem;
