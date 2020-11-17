import { CollectionUtils } from "andculturecode-javascript-core";
import {
    Dispatch,
    Reducer,
    ReducerAction,
    ReducerState,
    useReducer,
} from "react";

// -----------------------------------------------------------------------------------------
// #region Reducer
// -----------------------------------------------------------------------------------------

function useSortedAlphabetically<T>(
    initialValue: Array<T>,
    sortBySelector: (value: T) => string
): [
    ReducerState<Reducer<Array<T>, Array<T>>>,
    Dispatch<ReducerAction<Reducer<Array<T>, Array<T>>>>
] {
    const [values, setValues] = useReducer<Reducer<Array<T>, Array<T>>>(
        // first parameter prevState is unused, replace with discard _
        (_: Array<T>, newState: Array<T>) =>
            CollectionUtils.sortByString(newState, sortBySelector),
        CollectionUtils.sortByString(initialValue, sortBySelector)
    );

    return [values, setValues];
}

// #endregion Reducer

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { useSortedAlphabetically };

// #endregion Exports
