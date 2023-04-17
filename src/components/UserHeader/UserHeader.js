import { GoTriangleDown, GoX, GoSync } from "react-icons/go";

const UserHeader = ({
    user,
    isDeletingUser,
    handleDeleteUser,
    deletingUserError,
}) => {
    return (
        <div className=" border rounded-t-md">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex">
                    <div className="flex items-center justify-center mr-4">
                        {!isDeletingUser ? (
                            <GoX
                                className="text-red-400 hover:text-red-700"
                                onClick={handleDeleteUser}
                            />
                        ) : (
                            <GoSync className="animate-spin" />
                        )}
                    </div>
                    {deletingUserError && "error"}
                    {user.name}
                </div>
                <GoTriangleDown />
            </div>
        </div>
    );
};

export default UserHeader;
