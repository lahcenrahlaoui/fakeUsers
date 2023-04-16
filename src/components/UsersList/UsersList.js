import { useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../../store";

import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../../hooks/useThunk";

import LoadingData from "../LoadingData/LoadingData";
import Button from "../Button/Button";

import { GoTriangleDown, GoX } from "react-icons/go";

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doCreatingUser, isCreatingUser, creatingUserError] =
        useThunk(addUser);
    const [doDeletingUser, isDeletingUser, deletingUserError] =
        useThunk(deleteUser);

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        doFetchUsers();
    }, [dispatch]);

    if (isLoadingUsers) {
        return <LoadingData loop={6} className="h-20 w-full" />;
    }
    if (loadingUsersError) {
        return (
            <div>
                <div className="fixed inset-0  bg-opacity-75"></div>
                <div className="fixed inset-40">
                    <div className="flex  items-center justify-center h-full bg-red-200 ">
                        {loadingUsersError.message}
                    </div>
                </div>
            </div>
        );
    }
    const handelAddUser = () => {
        doCreatingUser();
    };
    const handleDeleteUser = (id) => {
        doDeletingUser(id);
    };

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <div className="flex">
                        <div className="flex items-center justify-center mr-4">
                            {!isDeletingUser ? (
                                <GoX
                                    className="text-red-400 hover:text-red-700"
                                    onClick={() => handleDeleteUser(user.id)}
                                />
                            ) : (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                            )}
                        </div>
                        {user.name}
                    </div>
                    <GoTriangleDown />
                </div>
            </div>
        );
    });

    return (
        <div>
            <div>
                <div className="flex justify-between  p-4">
                    <div>
                        <b>USERS</b>
                    </div>
                    <Button
                        className="flex justify-center items-center w-24 h-9"
                        primary
                        loading={isCreatingUser}
                        onClick={handelAddUser}
                    >
                       Add User
                       
                            {/* <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div> */}
                       
                    </Button>
                    {creatingUserError && "error creating "}
                    {deletingUserError && "error delete "}
                </div>
                {renderedUsers}
            </div>
        </div>
    );
};

export default UsersList;
