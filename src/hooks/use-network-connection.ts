import { useContext } from "react";
import { NetworkConnection } from "andculturecode-javascript-core";
import { NetworkConnectionContext } from "../contexts/network-connection-context";

/**
 * Hook that returns the current network connection information
 */
export const useNetworkConnection = (): NetworkConnection => {
    const networkConnection = useContext(NetworkConnectionContext);

    if (networkConnection === undefined) {
        throw new Error(
            "useNetworkConnection must be used within a NetworkConnectionProvider component"
        );
    }

    return networkConnection;
};
