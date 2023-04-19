import { GoX, GoSync } from "react-icons/go";

import { deleteUser } from "../../store";

import { useThunk } from "../../hooks/useThunk";

import ExpandPanel from "../ExpandPanel/ExpandPanel";

import AlbumsList from "../AlbumsList/AlbumsList";

function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);

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

    return (
        <div className="mb-2 ">
            <ExpandPanel header={content}>
                <AlbumsList user={user} />
            </ExpandPanel>
        </div>
    );
}

export default UserItem;
