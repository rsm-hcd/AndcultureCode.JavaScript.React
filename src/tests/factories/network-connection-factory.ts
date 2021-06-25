import { NetworkConnection } from "andculturecode-javascript-core";
import { Factory } from "rosie";
import faker from "faker";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

export const NetworkConnectionFactory = Factory.define<NetworkConnection>(
    "NetworkConnection"
)
    .attr("rtt", rttFactory)
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

/**
 * Returns a random estimated effective round-trip time of the current connection,
 * rounded to the nearest multiple of 25 milliseconds. Values will range from 25 - 1000 ms.
 * https://wicg.github.io/netinfo/#networkinformation-interface
 */
function rttFactory() {
    return 25 * (faker.random.number(39) + 1);
}

// #endregion Functions
