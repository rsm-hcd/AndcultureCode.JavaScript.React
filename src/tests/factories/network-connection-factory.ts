import { NetworkConnection } from "andculturecode-javascript-core";
import { Factory } from "rosie";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

export const networkConnectionFactory = Factory.define<
    NetworkConnection & { id: number }
>("NetworkConnection")
    .sequence("id")
    .attr("isOnline", true)
    .attr("addEventListener", () => {})
    .attr("removeEventListener", () => {});

// #endregion Factory
