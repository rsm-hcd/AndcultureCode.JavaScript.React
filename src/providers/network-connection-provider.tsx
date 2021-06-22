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

    const [state, setState] = useState<NetworkConnection>(
        NetworkInformationUtils.getNetworkConnection()
    );

    const loadNetworkInformation = useCallback(() => {
        const networkConnection = NetworkInformationUtils.getNetworkConnection();

        setState((prev) => ({
            ...prev,
            ...networkConnection,
        }));
    }, []);

    useEffect(() => {
        const networkConnection = NetworkInformationUtils.getNetworkConnection();

        networkConnection?.addEventListener?.("change", loadNetworkInformation);

        loadNetworkInformation();

        return function cleanup() {
            networkConnection?.removeEventListener?.(
                "change",
                loadNetworkInformation
            );
        };
    }, [loadNetworkInformation]);

    return (
        <NetworkConnectionContext.Provider value={state}>
            {children}
        </NetworkConnectionContext.Provider>
    );
};
