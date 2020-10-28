import {
    Do,
    EnvironmentUtils,
    ResultRecord,
} from "andculturecode-javascript-core";
import { useCallback, useEffect, useState } from "react";
import { UseQueryOptions } from "../interfaces/use-query-options";
import { ListService } from "../types/list-service-type";
import { NestedListService } from "../types/nested-list-service-type";

export function useQuery<TRecord, TQueryParams, TPathParams = undefined>(
    options: UseQueryOptions<TRecord, TQueryParams, TPathParams>
) {
    const {
        initialPathParams,
        initialQuery,
        onError,
        onSuccess,
        serviceHook,
    } = options;

    const { list: listApi } = serviceHook();

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
    const [pathParams, setPathParams] = useState(initialPathParams);
    const [values, setValues] = useState<Array<TRecord>>([]);

    useEffect(() => {
        Do.try(async () => {
            // if regular list, not nested list
            if (pathParams == null) {
                const api = listApi as ListService<TRecord, TQueryParams>;
                const result = await api(query);
                setValues(result.resultObjects!);
                handleSuccess(result.resultObjects!);
                return;
            }

            // otherwise, nested list
            const api = listApi as NestedListService<
                TRecord,
                TPathParams,
                TQueryParams
            >;
            const result = await api(pathParams, query);
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
        pathParams,
        setPathParams,
        values,
        setValues,
    };
}
