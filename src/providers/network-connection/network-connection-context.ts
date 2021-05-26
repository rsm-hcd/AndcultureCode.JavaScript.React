import { NetworkConnection } from "andculturecode-javascript-core";
import React from "react";

export const NetworkConnectionContext = React.createContext<NetworkConnection>({
    isOnline: true,
});
