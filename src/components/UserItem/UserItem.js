import { useState } from "react";

import { GoX, GoSync } from "react-icons/go";

import { deleteUser } from "../../store";

import { createAlbum } from "../../store";
import { useThunk } from "../../hooks/useThunk";

import ExpandPanel from "../ExpandPanel/ExpandPanel";
import Button from "../Button/Button";

function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);

    const [doCreatingAlbum, isCreatingAlbum, deletingAlbum] =
        useThunk(createAlbum);

    const handleDeleteUser = () => {
        doDeletingUser(user);
    };

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
            <ExpandPanel header={content}>
                <div className="flex justify-between">
                    {`Aalbums by ${user.name.split(" ")[0]}`}
                    <Button danger onClick={handleAddAlbum}>
                        +Album
                    </Button>
                </div>
            </ExpandPanel>
        </div>
    );
}

export default UserItem;
