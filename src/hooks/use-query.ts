import {
    CatchResultHandler,
    Do,
    EnvironmentUtils,
    ResultRecord,
} from "andculturecode-javascript-core";
import { useCallback, useEffect, useState } from "react";
import { ListServiceHook } from "../types/list-service-hook-type";

export function useQuery<TRecord, TQueryParams>(
    service: ListServiceHook<TRecord, TQueryParams>,
    initialQuery: TQueryParams,
    onSuccess?: (records: Array<TRecord>) => void,
    onError?: CatchResultHandler<TRecord>
) {
    const { list: listApi } = service();

    const handleSuccess = useCallback(
        (records: Array<TRecord>) => {
            if (onSuccess != null) {
                onSuccess(records);
                return;
            }
        },
        [onSuccess]
    );

    const handleError = useCallback(
        (result?: ResultRecord<TRecord>, error?: any) => {
            if (onError != null) {
                onError(result, error);
                return;
            }

            EnvironmentUtils.runIfDevelopment(() => {
                console.error("No error handler defined.");
                console.error(result, error);
            });
        },
        [onError]
    );

    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState(initialQuery);
    const [values, setValues] = useState<Array<TRecord>>([]);

    useEffect(() => {
        Do.try(async () => {
            const result = await listApi(query);
            setValues(result.resultObjects!);
            handleSuccess(result.resultObjects!);
        })
            .catch(handleError)
            .finally(() => setLoading(false));
    });

    return {
        loading,
        query,
        setQuery,
        values,
        setValues,
    };
}
