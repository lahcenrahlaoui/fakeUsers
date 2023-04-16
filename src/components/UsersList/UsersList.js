import { useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../../store";

import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../../hooks/useThunk";

import LoadingData from "../LoadingData/LoadingData";
import Button from "../Button/Button";
import UserItem from "../UserItem/UserItem"


const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doCreatingUser, isCreatingUser, creatingUserError] =
        useThunk(addUser);


    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        doFetchUsers();
    }, [dispatch]);

    const handelAddUser = () => {
        doCreatingUser();
    };
  
    let content ; 
    if (isLoadingUsers) {
        content = <LoadingData loop={6} className="h-10 w-full" />;
    }else if(loadingUsersError){
        content = <div>error loading users </div> 
    }else{
        content = data.map((user) => {
            return (
                <UserItem user={user} />
            );
        });
    }
    // if (loadingUsersError) {
    //     return (
    //         <div>
    //             <div className="fixed inset-0  bg-opacity-75"></div>
    //             <div className="fixed inset-40">
    //                 <div className="flex  items-center justify-center h-full bg-red-200 ">
    //                     {loadingUsersError.message}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }




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
                    </Button>
                    
                </div>
                {content}
            </div>
        </div>
    );
};

export default UsersList;
