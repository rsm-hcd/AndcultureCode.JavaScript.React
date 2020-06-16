import { Factory } from "rosie";
import { useEffect, useState } from "react";
import React from "react";
import { act, render } from "@testing-library/react";
import { ServiceFactory } from "./service-factory";
import { CoreUtils } from "andculturecode-javascript-core";
import {
    MockAxios,
    StubResourceRecord,
} from "andculturecode-javascript-testing";
import { FactoryType as AndcultureCodeFactoryType } from "andculturecode-javascript-testing";

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
    // -------------------------------------------------------------------------------------------------
    // #region bulkUpdate
    // -------------------------------------------------------------------------------------------------

    describe("bulkUpdate", () => {
        itReturnsFunction(ServiceFactory.bulkUpdate, baseEndpoint);

        /**
         * Test ensures service factory in fact causes a react console.error to throw
         * when the react component unmounts before the promise resolves.
         *
         * See ServiceHookFactory.test.tsx for test that verifies cancellation works
         */

        it("when unmounted before resolution, promise isn't cancelled and error thrown", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");
            const sut = ServiceFactory.bulkUpdate(
                StubResourceRecord,
                resourceEndpoint
            );
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            MockAxios.putSuccess([record], cancellationTestsApiDelay);

            let isUnmounted = false;

            const BulkUpdateStubComponent = () => {
                const [stubRecords, setStubRecords] = useState<
                    Array<StubResourceRecord>
                >([]);

                useEffect(() => {
                    async function updateStubRecords() {
                        const result = await sut([record], { id: record.id! });
                        setStubRecords(result.resultObjects || []);
                    }

                    updateStubRecords();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return (
                    <div>
                        {stubRecords != null &&
                            stubRecords.length > 0 &&
                            stubRecords[0].name}
                    </div>
                );
            };

            // Act
            await act(async () => {
                const { unmount } = render(<BulkUpdateStubComponent />);
                unmount();
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API
                // promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            const sut = ServiceFactory.bulkUpdate(
                StubResourceRecord,
                baseEndpoint
            );
            MockAxios.putSuccess([expected]);

            // Act
            const response = await sut([expected], { id: expected.id! });

            // Assert
            expect(response.resultObjects).not.toBeNull();
            expect(response.resultObjects).toBeInstanceOf(Array);
            expect(response.resultObjects![0].name).toEqual(expected.name);
        });
    });

    // #endregion bulkUpdate

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
                AndcultureCodeFactoryType.StubResourceRecord
            );

            MockAxios.postSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const CreateStubComponent = () => {
                const [stubRecord, setStubRecord] = useState<
                    StubResourceRecord
                >(null as any);

                useEffect(() => {
                    async function createStubRecord() {
                        const result = await create(
                            Factory.build<StubResourceRecord>(
                                AndcultureCodeFactoryType.StubResourceRecord
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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord
            );

            const sut = ServiceFactory.create(StubResourceRecord, baseEndpoint);
            MockAxios.postSuccess(expected);

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
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            MockAxios.deleteSuccess(record, cancellationTestsApiDelay);

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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, given empty result, returns response without resultObject", async () => {
            // Arrange
            const sut = ServiceFactory.delete(resourceEndpoint);

            MockAxios.deleteSuccess(undefined);

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
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            MockAxios.getSuccess(record, cancellationTestsApiDelay);

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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            const sut = ServiceFactory.get<
                StubResourceRecord,
                StubResourceParams
            >(StubResourceRecord, resourceEndpoint);

            MockAxios.getSuccess(expected);

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
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            ) as StubResourceRecord[];

            MockAxios.listSuccess(expectedResults, cancellationTestsApiDelay);

            let isUnmounted = false;

            const ListStubComponent = () => {
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listStubRecords() {
                        const result = await sut();
                        setRecords(result.resultObjects!);
                    }

                    listStubRecords();

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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expectedResults: StubResourceRecord[] = Factory.buildList(
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            );

            const sut = ServiceFactory.list<StubResourceRecord, StubListParams>(
                StubResourceRecord,
                baseEndpoint
            );
            MockAxios.listSuccess(expectedResults);

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
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            MockAxios.postSuccess(record, cancellationTestsApiDelay);

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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord
            );

            const sut = ServiceFactory.nestedCreate<
                StubResourceRecord,
                StubNestedParams
            >(StubResourceRecord, nestedBaseEndpoint);

            MockAxios.postSuccess(expected);

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
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            );

            MockAxios.listSuccess(expectedResults, cancellationTestsApiDelay);

            let isUnmounted = false;

            const NestedListStubComponent = () => {
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listStubRecords() {
                        const result = await sut({ nestedId: 20 });
                        setRecords(result.resultObjects!);
                    }

                    listStubRecords();

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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expectedResults: StubResourceRecord[] = Factory.buildList(
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            );

            const sut = ServiceFactory.nestedList<
                StubResourceRecord,
                StubNestedParams,
                StubListQueryParams
            >(StubResourceRecord, nestedBaseEndpoint);

            MockAxios.listSuccess(expectedResults);

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
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            MockAxios.putSuccess(record, cancellationTestsApiDelay);

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
                await CoreUtils.sleep(cancellationTestsAssertionDelay); // Force a sleep longer than when API promise resolves
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        it("when successful, returns response mapped to supplied TRecord", async () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 20,
                }
            );

            const sut = ServiceFactory.update(StubResourceRecord, baseEndpoint);
            MockAxios.putSuccess(expected);

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
