import React from "react";
import { render } from "@testing-library/react";
import NetworkConnectionProvider from "./network-connection-provider";
import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import useNetworkConnection from "../../hooks/use-network-connection";

interface SetupSutOptions {
    connection?: NetworkConnection;
}

const setupSut = (options?: SetupSutOptions) => {
    const { connection } = options ?? {};

    jest.spyOn(
        NetworkInformationUtils,
        "getNetworkConnection"
    ).mockImplementation(() => connection);

    const networkConnectionResults: NetworkConnection[] = [];

    function TestComponent() {
        const connection = useNetworkConnection();
        networkConnectionResults.push(connection);

        return <div></div>;
    }

    return {
        TestComponent,
        networkConnectionResults: {
            all: networkConnectionResults,
            current:
                networkConnectionResults[networkConnectionResults.length - 1],
        },
    };
};

describe("NetworkConnectionProvider", () => {
    it("renders initial network connection state", () => {
        // Arrange
        const connection: NetworkConnection = {
            isOnline: true,
        };
        const { networkConnectionResults, TestComponent } = setupSut({
            connection,
        });

        // Act
        render(
            <NetworkConnectionProvider>
                <TestComponent />
            </NetworkConnectionProvider>
        );

        // Assert
        expect(networkConnectionResults.current).toEqual(connection);
    });
});
