import { useState } from "react";

import { GoX } from "react-icons/go";

import { deleteUser } from "../../store";

import { useThunk } from "../../hooks/useThunk";

import ExpandPanel from "../ExpandPanel/ExpandPanel";

function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);

    const [togglePanel, setTogglePanel] = useState(false);

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
            <ExpandPanel header={content} onClick={setTogglePanel}>
                {togglePanel && <div className="p-2 border">conmterrnt</div>}
            </ExpandPanel>
        </div>
    );
}

export default UserItem;
