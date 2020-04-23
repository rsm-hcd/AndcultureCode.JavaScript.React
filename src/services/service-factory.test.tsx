import { Factory } from "rosie";
import { useEffect, useState } from "react";
import React from "react";
import { act, render } from "@testing-library/react";
import { ServiceFactory } from "./service-factory";
import { TestUtils } from "../tests/test-utils";
import { StubResourceRecord } from "../tests/stubs/stub-resource-record";
import { FactoryType } from "../tests/factories/factory-type";
import mockAxios from "../tests/mocks/mock-axios";

// -----------------------------------------------------------------------------------------
// #region Variables
// -----------------------------------------------------------------------------------------

const baseEndpoint = "tests";
const cancellationTestsApiDelay = 10;
const cancellationTestsAssertionDelay = 20;
const resourceEndpoint = `${baseEndpoint}/:id`;
const nestedBaseEndpoint = `nested/:nestedId/${baseEndpoint}`;

// #endregion Variables

// -----------------------------------------------------------------------------------------
// #region Stubs
// -----------------------------------------------------------------------------------------

interface StubNestedParams {
    nestedId: number;
}

interface StubResourceParams {
    id: number;
}

interface StubResource {
    id: number;
    name?: string;
}

// #endregion Stubs

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

// #endregion
const itReturnsFunction = (func: Function, endpoint: string) => {
    it("returns function", () => {
        expect(func(StubResourceRecord, endpoint)).toBeInstanceOf(Function);
    });
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Tests
// -----------------------------------------------------------------------------------------

describe("ServiceFactory", () => {
    // -----------------------------------------------------------------------------------------
    // #region create
    // -----------------------------------------------------------------------------------------

    describe("create", () => {
        itReturnsFunction(ServiceFactory.create, baseEndpoint);

        it("given null, throws error", async () => {
            expect.assertions(1);
            try {
                const sut = ServiceFactory.create(
                    StubResourceRecord,
                    baseEndpoint
                );
                await sut(null as any); // <----- passing null
            } catch (e) {
                expect(e).toBeInstanceOf(TypeError);
            }
        });

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */
        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const create = ServiceFactory.create(
                StubResourceRecord,
                baseEndpoint
            );
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord
            );

            mockAxios.postSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const CreateStubComponent = () => {
                const [stubRecord, setStubRecord] = useState<
                    StubResourceRecord
                >(null as any);

                useEffect(() => {
                    async function createStubRecord() {
                        const result = await create(
                            Factory.build<StubResourceRecord>(
                                FactoryType.StubResourceRecord
                            )
                        );
                        setStubRecord(result.resultObject!);
                    }

                    createStubRecord();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{record != null && record!.name}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<CreateStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord
            );

            const sut = ServiceFactory.create(StubResourceRecord, baseEndpoint);
            mockAxios.postSuccess(expected);

            // Act
            const response = await sut(expected);

            // Assert
            expect(response.resultObject).not.toBeNull();
            expect(response.resultObject).toBeInstanceOf(StubResourceRecord);
            expect(response.resultObject!.name).toEqual(expected.name);
        });
    });

    // #endregion create

    // -----------------------------------------------------------------------------------------
    // #region delete
    // --------------------------------------------------------------------------------------------

    describe("delete", () => {
        itReturnsFunction(ServiceFactory.delete, baseEndpoint);

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */
        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.delete(resourceEndpoint);
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            mockAxios.deleteSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const DeleteStubComponent = () => {
                const [deleted, setDeleted] = useState(false);

                useEffect(() => {
                    async function deleteUser() {
                        const result = await sut(record.id!);
                        setDeleted((result.resultObject || false) as boolean);
                    }

                    deleteUser();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{deleted && "deleted"}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<DeleteStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, given empty result, returns response without resultObject", async () => {
            // Arrange
            const sut = ServiceFactory.delete(resourceEndpoint);

            mockAxios.deleteSuccess(undefined);

            // Act
            const response = await sut(10);

            // Assert
            expect(response.resultObject).toBeUndefined();
        });
    });

    // #endregion delete

    // -----------------------------------------------------------------------------------------
    // #region get
    // --------------------------------------------------------------------------------------------

    describe("get", () => {
        itReturnsFunction(ServiceFactory.get, baseEndpoint);

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */
        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.get<
                StubResourceRecord,
                StubResourceParams
            >(StubResourceRecord, resourceEndpoint);
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            mockAxios.getSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const GetStubComponent = () => {
                const [stubRecord, setStubRecord] = useState<
                    StubResourceRecord
                >(null as any);

                useEffect(() => {
                    async function getRecord() {
                        const result = await sut({ id: record.id! });
                        setStubRecord(result.resultObject!);
                    }

                    getRecord();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{record != null && record!.name}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<GetStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            const sut = ServiceFactory.get<
                StubResourceRecord,
                StubResourceParams
            >(StubResourceRecord, resourceEndpoint);

            mockAxios.getSuccess(expected);

            // Act
            const response = await sut({ id: expected.id! });

            // Assert
            expect(response.resultObject).not.toBeNull();
            expect(response.resultObject).toBeInstanceOf(StubResourceRecord);
            expect(response.resultObject!.name).toEqual(expected.name);
        });
    });

    // #endregion get

    // -----------------------------------------------------------------------------------------
    // #region list
    // -----------------------------------------------------------------------------------------

    describe("list", () => {
        interface StubListParams {}

        itReturnsFunction(ServiceFactory.list, baseEndpoint);

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */
        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.list<
                StubResourceRecord,
                StubResourceParams
            >(StubResourceRecord, baseEndpoint);
            const expectedResults = Factory.buildList(
                FactoryType.StubResourceRecord,
                2
            ) as StubResourceRecord[];

            mockAxios.listSuccess(expectedResults, cancellationTestsApiDelay);

            let isUnmounted = false;

            const ListStubComponent = () => {
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listUsers() {
                        const result = await sut();
                        setRecords(result.resultObjects!);
                    }

                    listUsers();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return (
                    <div>{records != null && records.map((u) => u.name!)}</div>
                );
            };

            // Act
            await act(async () => {
                const { unmount } = render(<ListStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expectedResults: StubResourceRecord[] = Factory.buildList(
                FactoryType.StubResourceRecord,
                2
            );

            const sut = ServiceFactory.list<StubResourceRecord, StubListParams>(
                StubResourceRecord,
                baseEndpoint
            );
            mockAxios.listSuccess(expectedResults);

            // Act
            const response = await sut();

            // Assert
            const resultObjects = response.resultObjects;
            expect(resultObjects).not.toBeNull();
            expect(response.rowCount).toEqual(expectedResults.length);

            for (let i = 0; i < resultObjects!.length; i++) {
                const expected = expectedResults[i];
                const resultObject = resultObjects![i];
                expect(resultObject).toBeInstanceOf(StubResourceRecord);
                expect(resultObject.name).toEqual(expected.name);
            }
        });
    });

    // #endregion list

    // -----------------------------------------------------------------------------------------
    // #region nestedCreate
    // -----------------------------------------------------------------------------------------

    describe("nestedCreate", () => {
        itReturnsFunction(ServiceFactory.nestedCreate, nestedBaseEndpoint);

        it("given null, throws error", async () => {
            expect.assertions(1);
            try {
                const sut = ServiceFactory.nestedCreate(
                    StubResourceRecord,
                    baseEndpoint
                );

                await sut(null as any, {}); // <----- passing null
            } catch (e) {
                expect(e).toBeInstanceOf(TypeError);
            }
        });

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */
        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.nestedCreate<
                StubResourceRecord,
                StubNestedParams
            >(StubResourceRecord, nestedBaseEndpoint);
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            mockAxios.postSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const NestedCreateStubComponent = () => {
                const [stubRecord, setStubRecord] = useState<
                    StubResourceRecord
                >(null as any);

                useEffect(() => {
                    async function createUser() {
                        const result = await sut(record, { nestedId: 10 });
                        setStubRecord(result.resultObject!);
                    }

                    createUser();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{stubRecord != null && stubRecord!.name}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<NestedCreateStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord
            );

            const sut = ServiceFactory.nestedCreate<
                StubResourceRecord,
                StubNestedParams
            >(StubResourceRecord, nestedBaseEndpoint);

            mockAxios.postSuccess(expected);

            // Act
            const response = await sut(expected, { nestedId: 40 });

            // Assert
            expect(response.resultObject).not.toBeNull();
            expect(response.resultObject).toBeInstanceOf(StubResourceRecord);
            expect(response.resultObject!.name).toEqual(expected.name);
        });
    });

    // #endregion nestedCreate

    // -----------------------------------------------------------------------------------------
    // #region nestedList
    // -----------------------------------------------------------------------------------------

    describe("nestedList", () => {
        interface StubListQueryParams {}

        itReturnsFunction(ServiceFactory.nestedList, nestedBaseEndpoint);

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */
        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.nestedList<
                StubResourceRecord,
                StubNestedParams,
                StubListQueryParams
            >(StubResourceRecord, nestedBaseEndpoint);
            const expectedResults: StubResourceRecord[] = Factory.buildList(
                FactoryType.StubResourceRecord,
                2
            );

            mockAxios.listSuccess(expectedResults, cancellationTestsApiDelay);

            let isUnmounted = false;

            const NestedListStubComponent = () => {
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listUsers() {
                        const result = await sut({ nestedId: 20 });
                        setRecords(result.resultObjects!);
                    }

                    listUsers();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return (
                    <div>{records != null && records.map((u) => u.name!)}</div>
                );
            };

            // Act
            await act(async () => {
                const { unmount } = render(<NestedListStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expectedResults: StubResourceRecord[] = Factory.buildList(
                FactoryType.StubResourceRecord,
                2
            );

            const sut = ServiceFactory.nestedList<
                StubResourceRecord,
                StubNestedParams,
                StubListQueryParams
            >(StubResourceRecord, nestedBaseEndpoint);

            mockAxios.listSuccess(expectedResults);

            // Act
            const response = await sut({ nestedId: 40 });

            // Assert
            const resultObjects = response.resultObjects;
            expect(resultObjects).not.toBeNull();
            expect(response.rowCount).toEqual(expectedResults.length);

            for (let i = 0; i < resultObjects!.length; i++) {
                const expected = expectedResults[i];
                const resultObject = resultObjects![i];
                expect(resultObject).toBeInstanceOf(StubResourceRecord);
                expect(resultObject.name).toEqual(expected.name);
            }
        });
    });

    // #endregion nestedList

    // -----------------------------------------------------------------------------------------
    // #region update
    // -----------------------------------------------------------------------------------------

    describe("update", () => {
        itReturnsFunction(ServiceFactory.update, baseEndpoint);

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */

        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.update(
                StubResourceRecord,
                resourceEndpoint
            );
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            mockAxios.putSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const UpdateStubComponent = () => {
                const [stubRecord, setStubRecord] = useState<
                    StubResourceRecord
                >(null as any);

                useEffect(() => {
                    async function updateUser() {
                        const result = await sut(record);
                        setStubRecord(result.resultObject!);
                    }

                    updateUser();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{stubRecord != null && stubRecord!.name}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<UpdateStubComponent />);
                unmount();
                await TestUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            const sut = ServiceFactory.update(StubResourceRecord, baseEndpoint);
            mockAxios.putSuccess(expected);

            // Act
            const response = await sut(expected);

            // Assert
            expect(response.resultObject).not.toBeNull();
            expect(response.resultObject).toBeInstanceOf(StubResourceRecord);
            expect(response.resultObject!.name).toEqual(expected.name);
        });
    });

    // #endregion update
});

// #endregion Tests
