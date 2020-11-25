import { CollectionUtils } from "andculturecode-javascript-core";
import {
    Dispatch,
    Reducer,
    ReducerAction,
    ReducerState,
    useReducer,
} from "react";

// -----------------------------------------------------------------------------------------
// #region Hook
// -----------------------------------------------------------------------------------------

/**
 * Create a stateful array value which is always sorted alphabetically.
 * @param initialValue the initial value of the array. Does not need to be sorted, the hook will sort it before setting the value.
 * @param sortBySelector a function which takes an array element, and returns a string property by which to sort alphabetically.
 */
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

// #endregion Hook

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { useSortedAlphabetically };

// #endregion Exports
