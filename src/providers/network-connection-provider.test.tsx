import React from "react";
import { act, cleanup, render } from "@testing-library/react";
import { NetworkConnectionProvider } from "./network-connection-provider";
import {
    NetworkConnection,
    NetworkInformationUtils,
} from "andculturecode-javascript-core";
import { useNetworkConnection } from "../hooks/use-network-connection";
import { NetworkConnectionFactory } from "../tests/factories/network-connection-factory";

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
// #region Setup
// -----------------------------------------------------------------------------------------

const getNetworkConnectionMock = jest.spyOn(
    NetworkInformationUtils,
    "getNetworkConnection"
);

const setupMocks = (mockConnections: Array<Partial<NetworkConnection>>) => {
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
};

const setupSut = (options?: SetupSutOptions): SetupSutResults => {
    const { mockConnections = [] } = options ?? {};

    setupMocks(mockConnections);

    const networkConnectionResults: TypeFromKey<
        SetupSutResults,
        "networkConnectionResults"
    > = {
        all: [] as NetworkConnection[],
    };

    function TestComponent() {
        const connection = useNetworkConnection();
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
        const expectedConnection = NetworkConnectionFactory.build();
        const { networkConnectionResults, TestComponent } = setupSut({
            mockConnections: [
                NetworkConnectionFactory.build(),
                expectedConnection,
            ],
        });

        // Act
        render(
            <NetworkConnectionProvider>
                <TestComponent />
            </NetworkConnectionProvider>
        );

        // Assert
        expect(networkConnectionResults.all.length).toEqual(2);
        expect(networkConnectionResults.current).toEqual(expectedConnection);
    });

    it("adds an event listener", () => {
        // Arrange
        const addEventListener = jest.fn();
        const networkConnection = NetworkConnectionFactory.build({
            addEventListener,
        });
        const { TestComponent } = setupSut({
            mockConnections: [networkConnection],
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
            let changeEventCallback = () => {};

            const expectedNetworkConnection = NetworkConnectionFactory.build();

            const mockConnections: Array<NetworkConnection> = [
                NetworkConnectionFactory.build(),
                NetworkConnectionFactory.build({
                    addEventListener: (
                        event: "change",
                        callback: VoidFunction
                    ) => {
                        changeEventCallback = callback;
                    },
                }),
                expectedNetworkConnection,
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

            act(() => changeEventCallback());

            // Assert
            expect(networkConnectionResults.all.length).toEqual(
                mockConnections.length
            );
            expect(networkConnectionResults.current).toEqual(
                expectedNetworkConnection
            );
        });
    });

    describe("when unmounted", () => {
        it("calls removeEventlistener for cleanup", async () => {
            // Arrange
            const removeEventListener = jest.fn();
            const networkConnection = NetworkConnectionFactory.build({
                removeEventListener,
            });
            const { TestComponent } = setupSut({
                mockConnections: [networkConnection],
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
