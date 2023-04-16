


import { useState } from "react";
import { useDispatch } from "react-redux";

const useThunk = ({ doFetch, state, setState }) => {
    const dispatch = useDispatch();
    const [a , setA] = useState()
    const x = dispatch(doFetch())
        .unwrap()
        .catch((error) => setState(error))
        .finally(() => setState(false));
    return [x, state, setState];
};

export default useThunk;
