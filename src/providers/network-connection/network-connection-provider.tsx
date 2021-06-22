import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import React, { useCallback, useEffect, useState } from "react";
import { NetworkConnectionContext } from "./network-connection-context";

const NetworkConnectionProvider: React.FC = ({ children }) => {
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

        return () => {
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

export default NetworkConnectionProvider;
