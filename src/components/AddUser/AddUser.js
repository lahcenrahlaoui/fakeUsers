
import { useDispatch } from "react-redux";
import { addUser } from "../../store";

import Button from "../Button/Button";

const AddUser = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addUser());
    };

    return (
        <div>
            users
            <Button primary onClick={handleClick}>
                Add user
            </Button>
        </div>
    );
};

export default AddUser;
