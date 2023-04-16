import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const runThunk = useCallback(
        (args) => {
            setIsLoading(true);
            dispatch(thunk(args))
                .unwrap()
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        },
        [thunk, dispatch]
    );

    return [runThunk, isLoading, error];
};

export { useThunk };
