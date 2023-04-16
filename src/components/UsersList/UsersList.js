import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { deleteUser, fetchUsers, addUser } from "../../store";

import LoadingData from "../LoadingData/LoadingData";

import { GoTriangleDown, GoX } from "react-icons/go";
import Button from "../Button/Button";

const UsersList = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.users);
    useEffect(() => {
        setIsLoadingUsers(true);
        console.log(isCreatingUser);
        dispatch(fetchUsers())
            .unwrap()
            .catch((error) => {
                setLoadingUsersError(error);
            })
            .finally(() => {
                setIsLoadingUsers(false);
            });
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
        setIsCreatingUser(true);
        dispatch(addUser()).then(() => setIsCreatingUser(false));
    };
    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    };

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <div className="flex">
                        <div className="flex items-center justify-center mr-4">
                            <GoX
                                className="text-red-400 hover:text-red-700"
                                onClick={() => handleDeleteUser(user.id)}
                            />
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
                        onClick={handelAddUser}
                    >
                        {!isCreatingUser ? (
                            <div>add user</div>
                            ) : (
                            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                        )}
                    </Button>
                </div>
                {renderedUsers}
            </div>
        </div>
    );
};

export default UsersList;
