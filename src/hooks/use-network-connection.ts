import { useContext } from "react";
import { NetworkConnectionContext } from "../providers/network-connection/network-connection-context";

export default function useNetworkConnection() {
    return useContext(NetworkConnectionContext);
}
