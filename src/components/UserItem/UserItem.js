import { fetchUsers, addUser, deleteUser } from "../../store";

import { useThunk } from "../../hooks/useThunk";

import { GoTriangleDown, GoX } from "react-icons/go";
import { GoSync } from "react-icons/go";

function UserItem({ user }) {
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);
    const handleDeleteUser = (user) => {
        doDeletingUser(user);
    };

    return (
        <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex">
                    <div className="flex items-center justify-center mr-4">
                        {!isDeletingUser ? (
                            <GoX
                                className="text-red-400 hover:text-red-700"
                                onClick={() => handleDeleteUser(user)}
                            />
                        ) : (
                            <GoSync className="animate-spin"/>
                        )}
                    </div>
                    {user.name}
                </div>
                <GoTriangleDown />
            </div>
        </div>
    );
}

export default UserItem;
