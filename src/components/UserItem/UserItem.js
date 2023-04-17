import { deleteUser } from "../../store";
import { useThunk } from "../../hooks/useThunk";

import UserHeader from "../UserHeader/UserHeader";
import AlbumList from "../AlbumsList/AlbumList";
function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);
    const handleDeleteUser = () => {
        doDeletingUser(user);
    };

    return (
        <div className="mb-2">
            <UserHeader
                user={user}
                isDeletingUser={isDeletingUser}
                deletingUserError={deletingUserError}
                handleDeleteUser={handleDeleteUser}
            />
            <AlbumList />
        </div>
    );
}

export default UserItem;
