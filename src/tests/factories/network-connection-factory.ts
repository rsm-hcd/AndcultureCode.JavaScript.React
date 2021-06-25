import { NetworkConnection } from "andculturecode-javascript-core";
import { Factory } from "rosie";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

export const NetworkConnectionFactory = Factory.define<NetworkConnection>(
    "NetworkConnection"
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
