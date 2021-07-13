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

    const loadNetworkInformation = useCallback((isOnline?: boolean) => {
        const networkConnection = NetworkInformationUtils.getNetworkConnection();

        if (networkConnection == null) {
            return;
        }

        setState((prev) => ({
            ...prev,
            ...networkConnection,
            isOnline: isOnline ?? networkConnection.isOnline,
        }));
    }, []);

    useEffect(
        function handleNetworkChangeEvents() {
            const networkConnection = NetworkInformationUtils.getNetworkConnection();

            const createNetworkChangeHandler = (isOnline?: boolean) => () =>
                loadNetworkInformation(isOnline);

            const handleNetworkChange = createNetworkChangeHandler();
            const handleOffline = createNetworkChangeHandler(false);
            const handleOnline = createNetworkChangeHandler(true);

            networkConnection?.addEventListener?.(
                "change",
                handleNetworkChange
            );
            window?.addEventListener?.("online", handleOnline);
            window?.addEventListener?.("offline", handleOffline);

            loadNetworkInformation();

            return function cleanup() {
                networkConnection?.removeEventListener?.(
                    "change",
                    handleNetworkChange
                );
                window?.removeEventListener?.("online", handleOnline);
                window?.removeEventListener?.("offline", handleOffline);
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
