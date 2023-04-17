import { useState } from "react";

import { GoX } from "react-icons/go";

import { deleteUser } from "../../store";

import { useThunk } from "../../hooks/useThunk";

import ExpandPanel from "../ExpandPanel/ExpandPanel";
import Button from "../Button/Button";

function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);


    const handleDeleteUser = () => {
        doDeletingUser(user);
    };

    const content = (
        <>
            <div className="flex items-center justify-center mr-4">
                <GoX
                    className="text-red-400 hover:text-red-700"
                    onClick={handleDeleteUser}
                />
            </div>
            {deletingUserError && "error"}
            {user.name}
        </>
    );
    return (
        <div className="mb-2">
            <ExpandPanel header={content} >
              <div className="flex justify-between">
                 {`Aalbums by ${user.name.split(" ")[0]}`}
                <Button danger>
                    +Album
                </Button>
                </div> 
            </ExpandPanel>
        </div>
    );
}

export default UserItem;
