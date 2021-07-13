import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import React from "react";
import { NetworkConnectionProvider } from "../providers/network-connection-provider";
import { useNetworkConnection } from "./use-network-connection";

// -----------------------------------------------------------------------------------------
// #region Mocks
// -----------------------------------------------------------------------------------------

const getNetworkConnectionMock = jest.spyOn(
    NetworkInformationUtils,
    "getNetworkConnection"
);

// #endregion Mocks

describe("useNetworkConnection", () => {
    describe("when used outside NetworkConnectionProvider", () => {
        it("throws error", () => {
            // Arrange & Act
            const { result } = renderHook(() => useNetworkConnection());

            // Assert
            expect(result.error).toBeDefined();
        });
    });

    describe("when used inside NetworkConnectionProvider", () => {
        it("returns network connection information", () => {
            // Arrange
            let networkConnection: NetworkConnection;
            const expectedNetworkConnection: NetworkConnection = {
                isOnline: true,
            };

            getNetworkConnectionMock.mockReturnValue(expectedNetworkConnection);

            const TestComponent = () => {
                networkConnection = useNetworkConnection();
                return <div></div>;
            };

            // Act
            render(
                <NetworkConnectionProvider>
                    <TestComponent />
                </NetworkConnectionProvider>
            );

            // Assert
            expect(networkConnection).toEqual(expectedNetworkConnection);
        });
    });
});
