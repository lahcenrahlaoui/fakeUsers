import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { deleteUser, fetchUsers } from "../../store";

import LoadingData from "../LoadingData/LoadingData";

import { GoTriangleDown, GoX } from "react-icons/go";

const UsersList = () => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        return <LoadingData loop={6} className="h-20 w-full" />;
    }
    if (error) {
        return <div>Error </div>;
    }
    
    const handleClick = (id) => {
        dispatch(deleteUser(id));
    };
    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <div className="flex ">
                        <GoX onClick={() =>handleClick(user.id)} />
                        {user.name}
                    </div>
                    <GoTriangleDown />
                </div>
            </div>
        );
    });
    
    return <div>{renderedUsers}</div>;
};

export default UsersList;
