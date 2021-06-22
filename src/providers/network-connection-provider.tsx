import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from "react";
import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import { NetworkConnectionContext } from "../contexts/network-connection-context";

/**
 * Wrapper provider component that provides context to the `useNetworkConnection` hook
 */
export const NetworkConnectionProvider: React.FC = (
    props: PropsWithChildren<unknown>
) => {
    const { children } = props;

    const [state, setState] = useState<NetworkConnection | undefined>(
        NetworkInformationUtils.getNetworkConnection()
    );

    const loadNetworkInformation = useCallback(() => {
        const networkConnection = NetworkInformationUtils.getNetworkConnection();

        if (networkConnection == null) {
            return;
        }

        setState((prev) => ({
            ...prev,
            ...networkConnection,
        }));
    }, []);

    useEffect(function handleOnlineOfflineEvents() {
        const createNetworkChangeHandler = (isOnline: boolean) => () => {
            setState((prev) => ({
                ...prev,
                isOnline,
            }));
        };

        const handleOffline = createNetworkChangeHandler(false);
        const handleOnline = createNetworkChangeHandler(true);

        window?.addEventListener?.("online", handleOnline);
        window?.addEventListener?.("offline", handleOffline);

        return function cleanup() {
            window?.removeEventListener?.("online", handleOnline);
            window?.removeEventListener?.("offline", handleOffline);
        };
    }, []);

    useEffect(
        function handleNetworkChangeEvents() {
            const networkConnection = NetworkInformationUtils.getNetworkConnection();
            networkConnection?.addEventListener?.(
                "change",
                loadNetworkInformation
            );

            loadNetworkInformation();

            return function cleanup() {
                networkConnection?.removeEventListener?.(
                    "change",
                    loadNetworkInformation
                );
            };
        },
        [loadNetworkInformation]
    );

    return (
        <NetworkConnectionContext.Provider value={state}>
            {children}
        </NetworkConnectionContext.Provider>
    );
};
