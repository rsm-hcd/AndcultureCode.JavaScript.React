import { NetworkConnection } from "andculturecode-javascript-core";
import { Factory } from "rosie";
import { FactoryType } from "./factory-type";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

export const NetworkConnectionFactory = Factory.define<NetworkConnection>(
    FactoryType.NetworkConnection
)
    .attr("isOnline", true)
    .attr("addEventListener", eventListenerFactory)
    .attr("removeEventListener", eventListenerFactory);

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

function eventListenerFactory() {
    return () => {};
}

// #endregion Functions
