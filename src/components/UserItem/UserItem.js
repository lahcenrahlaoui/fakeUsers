import { GoX, GoSync } from "react-icons/go";

import { useSelector } from "react-redux";
import { deleteUser, createAlbum, fetchAlbums } from "../../store";

import { useThunk } from "../../hooks/useThunk";

import ExpandPanel from "../ExpandPanel/ExpandPanel";
import Button from "../Button/Button";
import AlbumsList from "../AlbumsList/AlbumsList";

function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);

    const [doCreatingAlbum, isCreatingAlbum, deletingAlbumError] =
        useThunk(createAlbum);

    const handleDeleteUser = () => {
        doDeletingUser(user);
    };

    const [doFetchAlbums, isFetchingAlbums, fetchingAlbumError] =
        useThunk(fetchAlbums);

    const content = (
        <>
            <div className="flex items-center justify-center mr-4">
                {!isDeletingUser ? (
                    <GoX
                        className="text-red-400 hover:text-red-700"
                        onClick={handleDeleteUser}
                    />
                ) : (
                    <GoSync className="animate-spin text-red-400" />
                )}
            </div>
            {deletingUserError && "error delete"}
            {user.name}
        </>
    );
    const handleAddAlbum = () => {
        doCreatingAlbum(user.id);
    };
    return (
        <div className="mb-2">
            <ExpandPanel header={content} onClick={doFetchAlbums} user={user}>
                <div className="flex justify-between">
                    {`Aalbums by ${user.name.split(" ")[0]}`}
                    <Button danger onClick={handleAddAlbum}>
                        +Album
                    </Button>
                </div>

                <AlbumsList user={user}/>
            </ExpandPanel>
        </div>
    );
}

export default UserItem;
