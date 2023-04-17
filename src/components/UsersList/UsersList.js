import { useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../../store";

import { useSelector } from "react-redux";
import { useThunk } from "../../hooks/useThunk";

import Slider from "../Slider/Slider";

import LoadingData from "../LoadingData/LoadingData";
import Button from "../Button/Button";
import UserItem from "../UserItem/UserItem";

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doCreatingUser, isCreatingUser, creatingUserError] =
        useThunk(addUser);

    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        doFetchUsers();
    }, []);

    const handelAddUser = () => {
        doCreatingUser();
    };

    let content;
    if (isLoadingUsers) {
        content = <LoadingData loop={10} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        content = <div>error loading users </div>;
    } else {
        content = data.map((user) => {
            return <UserItem key={user.id} user={user} />;
        });
    }

    if (creatingUserError) {
        content = (
            <div>
                <div className="fixed inset-0  opacity-25 "></div>
                <div className="fixed top-44 bottom-44 left-10 right-10 bold bg-red-100 p-2 text-red-500 flex justify-center items-center">
                    <div>{creatingUserError.message}</div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex w-full  justify-center">
             
            <div className="w-4/5">
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
                    </Button>
                </div>
                {content}
            </div>
        </div>
    );
};

export default UsersList;
