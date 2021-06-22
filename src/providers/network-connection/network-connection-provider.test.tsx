import React, { useContext } from "react";
import { act, cleanup, render } from "@testing-library/react";
import NetworkConnectionProvider from "./network-connection-provider";
import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import { NetworkConnectionContext } from "./network-connection-context";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

type TypeFromKey<Type, Key extends keyof Type> = Type[Key];

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface SetupSutOptions {
    mockConnections?: Array<Partial<NetworkConnection>>;
}

interface SetupSutResults {
    TestComponent: () => JSX.Element;
    networkConnectionResults: {
        all: Array<NetworkConnection>;
        current?: NetworkConnection;
    };
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Mocks
// -----------------------------------------------------------------------------------------

const getNetworkConnectionMock = jest.spyOn(
    NetworkInformationUtils,
    "getNetworkConnection"
);

// #endregion Mocks

// -----------------------------------------------------------------------------------------
// #region Setup
// -----------------------------------------------------------------------------------------

const setupSut = (options?: SetupSutOptions): SetupSutResults => {
    const { mockConnections = [] } = options ?? {};

    getNetworkConnectionMock.mockReset();
    for (let index = 0; index < mockConnections.length; index++) {
        const mockImplementation =
            index === mockConnections.length - 1
                ? getNetworkConnectionMock.mockImplementation
                : getNetworkConnectionMock.mockImplementationOnce;

        mockImplementation(() => {
            return {
                isOnline: true,
                ...mockConnections[index],
            };
        });
    }

    const networkConnectionResults: TypeFromKey<
        SetupSutResults,
        "networkConnectionResults"
    > = {
        all: [] as NetworkConnection[],
    };

    function TestComponent() {
        const connection = useContext(NetworkConnectionContext);
        networkConnectionResults.all.push(connection);
        networkConnectionResults.current = connection;

        return <div></div>;
    }

    return {
        TestComponent,
        networkConnectionResults,
    };
};

// #endregion Setup

describe("NetworkConnectionProvider", () => {
    it("renders initial network connection state", () => {
        // Arrange
        const connection: NetworkConnection = {
            isOnline: true,
        };
        const { networkConnectionResults, TestComponent } = setupSut({
            mockConnections: [connection],
        });

        // Act
        render(
            <NetworkConnectionProvider>
                <TestComponent />
            </NetworkConnectionProvider>
        );

        // Assert
        expect(networkConnectionResults.all.length).toEqual(2);
        expect(networkConnectionResults.current).toEqual(connection);
    });

    it("adds an event listener", () => {
        // Arrange
        const addEventListener = jest.fn();
        const { TestComponent } = setupSut({
            mockConnections: [{ addEventListener }],
        });

        // Act
        render(
            <NetworkConnectionProvider>
                <TestComponent />
            </NetworkConnectionProvider>
        );

        // Assert
        expect(addEventListener).toBeCalled();
    });

    describe("when change event is called", () => {
        it("loads network connection into state", () => {
            // Arrange
            let loadNetworkInformationCallback = () => {};

            const mockConnections: Array<NetworkConnection> = [
                {
                    isOnline: true,
                },
                {
                    isOnline: true,
                    addEventListener: (
                        event: "change",
                        callback: VoidFunction
                    ) => {
                        loadNetworkInformationCallback = callback;
                    },
                },
                {
                    isOnline: false,
                },
            ];

            const { networkConnectionResults, TestComponent } = setupSut({
                mockConnections,
            });

            // Act
            render(
                <NetworkConnectionProvider>
                    <TestComponent />
                </NetworkConnectionProvider>
            );

            act(() => loadNetworkInformationCallback());

            // Assert
            expect(networkConnectionResults.all.length).toEqual(
                mockConnections.length
            );
            expect(networkConnectionResults.current).toEqual(
                mockConnections[2]
            );
        });
    });

    describe("when unmounted", () => {
        it("calls removeEventlistener for cleanup", async () => {
            // Arrange
            const removeEventListener = jest.fn();
            const { TestComponent } = setupSut({
                mockConnections: [{ removeEventListener }],
            });

            // Act
            render(
                <NetworkConnectionProvider>
                    <TestComponent />
                </NetworkConnectionProvider>
            );

            await cleanup();

            // Assert
            expect(removeEventListener).toBeCalled();
        });
    });
});
