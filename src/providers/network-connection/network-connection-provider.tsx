import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import React, { useCallback, useEffect, useState } from "react";
import { NetworkConnectionContext } from "./network-connection-context";

const NetworkInformationProvider: React.FC = ({ children }) => {
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
        const { connection } = window.navigator as any;

        connection?.addEventListener("change", loadNetworkInformation);

        loadNetworkInformation();

        return () => {
            connection?.removeEventListener("change", loadNetworkInformation);
        };
    }, [loadNetworkInformation]);

    return (
        <NetworkConnectionContext.Provider value={state}>
            {children}
        </NetworkConnectionContext.Provider>
    );
};

export default NetworkInformationProvider;
