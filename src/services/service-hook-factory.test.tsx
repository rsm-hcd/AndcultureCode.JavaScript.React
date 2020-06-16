import React, { useState, useEffect } from "react";
import { Factory } from "rosie";
import { render, wait, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {
    MockAxios,
    StubResourceRecord,
} from "andculturecode-javascript-testing";
import { ServiceHookFactory } from "./service-hook-factory";
import { FactoryType as AndcultureCodeFactoryType } from "andculturecode-javascript-testing";
import { CoreUtils } from "andculturecode-javascript-core";

// ---------------------------------------------------------------------------------------------
// #region Variables
// ---------------------------------------------------------------------------------------------

const baseEndpoint = "records";
const cancellationTestsApiDelay = 10;
const cancellationTestsAssertionDelay = 20;
const resourceEndpoint = `${baseEndpoint}/:id`;
const nestedBaseEndpoint = `nested/:nestedId/${baseEndpoint}`;

// #endregion Variables

// ---------------------------------------------------------------------------------------------
// #region Stubs
// ---------------------------------------------------------------------------------------------

interface StubNestedParams {
    nestedId: number;
}

// #endregion Stubs

// ---------------------------------------------------------------------------------------------
// #region Functions
// ---------------------------------------------------------------------------------------------

const itReturnsFunction = (func: Function, endpoint: string) => {
    it("returns function", () => {
        expect(func(StubResourceRecord, endpoint)).toBeInstanceOf(Function);
    });
};

// #endregion Functions

// ---------------------------------------------------------------------------------------------
// #region Tests
// ---------------------------------------------------------------------------------------------

describe("ServiceHookFactory", () => {
    const sut = ServiceHookFactory;

    // ---------------------------------------------------------------------------------------------
    // #region useBulkUpdate
    // ---------------------------------------------------------------------------------------------

    describe("useBulkUpdate", () => {
        itReturnsFunction(sut.useBulkUpdate, baseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useBulkUpdate = sut.useBulkUpdate(
                StubResourceRecord,
                resourceEndpoint
            );
            const expectedStubRecord = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                { id: 10 }
            );

            MockAxios.putSuccess([expectedStubRecord]);

            const UpdateStubComponent = () => {
                const { update } = useBulkUpdate();
                const [records, setRecords] = useState<
                    Array<StubResourceRecord>
                >(null as any);

                useEffect(() => {
                    async function updateUser() {
                        const result = await update([expectedStubRecord], {
                            id: expectedStubRecord.id!,
                        });
                        setRecords(result.resultObjects!);
                    }
                    updateUser();
                }, []);

                return <div>{records != null && records[0].name}</div>;
            };

            // Act
            const { getByText } = render(<UpdateStubComponent />);

            // Assert
            await waitFor(() => {
                expect(getByText(expectedStubRecord.name!)).toBeInTheDocument();
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useBulkUpdate = sut.useBulkUpdate(
                StubResourceRecord,
                baseEndpoint
            );
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 10,
                }
            );

            MockAxios.putSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const UpdateStubComponent = () => {
                const { update } = useBulkUpdate();
                const [records, setRecords] = useState<
                    Array<StubResourceRecord>
                >(null as any);

                useEffect(() => {
                    async function updateUser() {
                        const result = await update([record], {
                            id: record.id!,
                        });
                        setRecords(result.resultObjects!);
                    }

                    updateUser();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{records != null && records[0].name}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<UpdateStubComponent />);
                unmount();
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useBulkUpdate

    // ---------------------------------------------------------------------------------------------
    // #region useCreate
    // ---------------------------------------------------------------------------------------------

    describe("useCreate", () => {
        itReturnsFunction(sut.useCreate, baseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useCreate = sut.useCreate<StubResourceRecord>(
                StubResourceRecord,
                baseEndpoint
            );
            const expectedStubRecord = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord
            );
            MockAxios.postSuccess(expectedStubRecord);

            const CreateStubComponent = () => {
                const { create } = useCreate();
                const [record, setRecord] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function createRecord() {
                        const result = await create(new StubResourceRecord());
                        setRecord(result.resultObject!);
                    }

                    createRecord();
                }, []);

                return <div>{record != null && record!.name}</div>;
            };

            // Act
            const { getByText } = render(<CreateStubComponent />);

            // Assert
            await waitFor(() => {
                expect(getByText(expectedStubRecord.name!)).toBeInTheDocument();
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useCreate = sut.useCreate<StubResourceRecord>(
                StubResourceRecord,
                baseEndpoint
            );

            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord
            );
            MockAxios.postSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const CreateStubComponent = () => {
                const { create } = useCreate();
                const [record, setRecord] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function createRecord() {
                        const result = await create(new StubResourceRecord());
                        setRecord(result.resultObject!);
                    }

                    createRecord();

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
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useCreate

    // ---------------------------------------------------------------------------------------------
    // #region useDelete
    // ---------------------------------------------------------------------------------------------

    describe("useDelete", () => {
        itReturnsFunction(sut.useDelete, baseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useDelete = sut.useDelete(resourceEndpoint);
            const recordIdToDelete = 10;

            MockAxios.deleteSuccess(new Boolean(true));

            const DeleteStubComponent = () => {
                const { delete: deleteRecord } = useDelete();
                const [isDeleted, setIsDeleted] = useState<boolean>(false);

                useEffect(() => {
                    async function deleteStubRecord() {
                        try {
                            const deleteResult = await deleteRecord(
                                recordIdToDelete
                            );
                            setIsDeleted(
                                (deleteResult.resultObject || false) as boolean
                            );
                        } catch (e) {}
                    }
                    deleteStubRecord();
                }, []);

                return <div>{isDeleted && "deleted"}</div>;
            };

            // Act
            const { getByText } = render(<DeleteStubComponent />);

            // Assert
            await waitFor(() => {
                expect(getByText("deleted")).toBeInTheDocument();
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useDelete = sut.useDelete(baseEndpoint);
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 10,
                }
            );
            MockAxios.deleteSuccess(record, cancellationTestsApiDelay);
            let isUnmounted = false;

            const DeleteStubComponent = () => {
                const { delete: deleteRecord } = useDelete();
                const [record, setRecord] = useState<StubResourceRecord>(
                    new StubResourceRecord()
                );

                useEffect(() => {
                    async function deleteStubRecord() {
                        await deleteRecord(record.id);
                        setRecord(record);
                    }

                    deleteStubRecord();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{record != null && record!.id}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<DeleteStubComponent />);
                unmount();
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useDelete

    // ---------------------------------------------------------------------------------------------
    // #region useGet
    // ---------------------------------------------------------------------------------------------

    describe("useGet", () => {
        itReturnsFunction(sut.useGet, baseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useGet = sut.useGet(StubResourceRecord, resourceEndpoint);
            const expectedStubRecord = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                { id: 10 }
            );

            MockAxios.getSuccess(expectedStubRecord);

            const GetStubComponent = () => {
                const { get } = useGet();
                const [record, setRecord] = useState<StubResourceRecord>(
                    new StubResourceRecord()
                );

                useEffect(() => {
                    async function getRecord() {
                        try {
                            const result = await get({
                                id: expectedStubRecord.id!,
                            });
                            setRecord(result.resultObject!);
                        } catch (e) {}
                    }

                    getRecord();
                }, []);

                return <div>{record != null && record.name}</div>;
            };

            // Act
            const { getByText } = render(<GetStubComponent />);

            // Assert
            await waitFor(() => {
                expect(getByText(expectedStubRecord.name!)).toBeInTheDocument();
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useGet = sut.useGet(StubResourceRecord, baseEndpoint);
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 10,
                }
            );
            MockAxios.getSuccess(record, cancellationTestsApiDelay);
            let isUnmounted = false;

            const GetStubComponent = () => {
                const { get } = useGet();
                const [record, setRecord] = useState<StubResourceRecord>(
                    new StubResourceRecord()
                );

                useEffect(() => {
                    async function getRecord() {
                        const result = await get(record.id!);
                        setRecord(result.resultObject!);
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
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useGet

    // ---------------------------------------------------------------------------------------------
    // #region useList
    // ---------------------------------------------------------------------------------------------

    describe("useList", () => {
        itReturnsFunction(sut.useList, baseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useList = sut.useList(StubResourceRecord, baseEndpoint);
            const expectedStubRecords: StubResourceRecord[] = Factory.buildList(
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            );

            MockAxios.listSuccess(expectedStubRecords);

            const ListStubComponent = () => {
                const { list } = useList();
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listUsers() {
                        try {
                            const result = await list();
                            setRecords(result.resultObjects!);
                        } catch (e) {}
                    }
                    listUsers();
                }, []);

                return (
                    <div>{records != null && records.map((u) => u.name!)}</div>
                );
            };

            // Act
            const { getByText } = render(<ListStubComponent />);

            // Assert
            await waitFor(() => {
                expectedStubRecords.forEach((expected) => {
                    expect(
                        getByText(expected.name!, { exact: false })
                    ).toBeInTheDocument();
                });
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useList = sut.useList(StubResourceRecord, baseEndpoint);
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 10,
                }
            );
            MockAxios.getSuccess(record, cancellationTestsApiDelay);
            let isUnmounted = false;

            const ListStubComponent = () => {
                const { list } = useList();
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listUsers() {
                        const result = await list();
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
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useList

    // ---------------------------------------------------------------------------------------------
    // #region useNestedCreate
    // ---------------------------------------------------------------------------------------------

    describe("useNestedCreate", () => {
        itReturnsFunction(sut.useNestedCreate, nestedBaseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useCreate = sut.useNestedCreate<
                StubResourceRecord,
                StubNestedParams
            >(StubResourceRecord, nestedBaseEndpoint);
            const expectedStubRecord = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord
            );

            MockAxios.postSuccess(expectedStubRecord);

            const NestedCreateStubComponent = () => {
                const { create } = useCreate();
                const [record, setRecord] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function createLogin() {
                        const result = await create(new StubResourceRecord(), {
                            nestedId: 10,
                        });
                        setRecord(result.resultObject!);
                    }
                    createLogin();
                }, []);

                return <div>{record != null && record!.name}</div>;
            };

            // Act
            const { getByText } = render(<NestedCreateStubComponent />);

            // Assert
            await waitFor(() => {
                expect(getByText(expectedStubRecord.name!)).toBeInTheDocument();
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useCreate = sut.useNestedCreate<
                StubResourceRecord,
                StubNestedParams
            >(StubResourceRecord, nestedBaseEndpoint);
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord
            );

            MockAxios.postSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const NestedCreateStubComponent = () => {
                const { create } = useCreate();
                const [record, setRecord] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function createRecord() {
                        const result = await create(new StubResourceRecord(), {
                            nestedId: 10,
                        });
                        setRecord(result.resultObject!);
                    }

                    createRecord();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{record != null && record.name!}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<NestedCreateStubComponent />);
                unmount();
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useNestedCreate

    // ---------------------------------------------------------------------------------------------
    // #region useNestedList
    // ---------------------------------------------------------------------------------------------

    describe("useNestedList", () => {
        itReturnsFunction(sut.useNestedList, nestedBaseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useList = sut.useNestedList<
                StubResourceRecord,
                StubNestedParams,
                {}
            >(StubResourceRecord, nestedBaseEndpoint);
            const expectedStubRecords: StubResourceRecord[] = Factory.buildList(
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            );

            MockAxios.listSuccess(expectedStubRecords);

            const NestedListStubComponent = () => {
                const { list } = useList();
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function getRecords() {
                        const result = await list({
                            nestedId: 10,
                        });
                        setRecords(result.resultObjects!);
                    }
                    getRecords();
                }, []);

                return (
                    <div>{records != null && records.map((u) => u.name!)}</div>
                );
            };

            // Act
            const { getByText } = render(<NestedListStubComponent />);

            // Assert
            await waitFor(() => {
                expectedStubRecords.forEach((expected) => {
                    expect(
                        getByText(expected.name!, { exact: false })
                    ).toBeInTheDocument();
                });
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useList = sut.useNestedList<
                StubResourceRecord,
                StubNestedParams,
                {}
            >(StubResourceRecord, nestedBaseEndpoint);
            const records: StubResourceRecord[] = Factory.buildList(
                AndcultureCodeFactoryType.StubResourceRecord,
                2
            );

            MockAxios.getSuccess(records, cancellationTestsApiDelay);

            let isUnmounted = false;

            const NestedListStubComponent = () => {
                const { list } = useList();
                const [records, setRecords] = useState<StubResourceRecord[]>(
                    []
                );

                useEffect(() => {
                    async function listUsers() {
                        const result = await list({ nestedId: 10 });
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
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useNestedList

    // ---------------------------------------------------------------------------------------------
    // #region useUpdate
    // ---------------------------------------------------------------------------------------------

    describe("useUpdate", () => {
        itReturnsFunction(sut.useUpdate, baseEndpoint);

        it("when not-cancelled, resolves successfully", async () => {
            // Arrange
            const useUpdate = sut.useUpdate(
                StubResourceRecord,
                resourceEndpoint
            );
            const expectedStubRecord = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                { id: 10 }
            );

            MockAxios.putSuccess(expectedStubRecord);

            const UpdateStubComponent = () => {
                const { update } = useUpdate();
                const [record, setRecord] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function updateUser() {
                        const result = await update(expectedStubRecord);
                        setRecord(result.resultObject!);
                    }
                    updateUser();
                }, []);

                return <div>{record != null && record!.name}</div>;
            };

            // Act
            const { getByText } = render(<UpdateStubComponent />);

            // Assert
            await waitFor(() => {
                expect(getByText(expectedStubRecord.name!)).toBeInTheDocument();
            });
        });

        /**
         * Test ensures service hook factory in fact protects against a react error
         * when the component is unmounted before the promise resolves.
         *
         * See ServiceFactory.test.tsx for test that verifies react error thrown
         */
        it("when unmounted before resolution, promise is cancelled successfully", async () => {
            // Arrange
            const consoleErrorSpy = jest.spyOn(console, "error");

            const useUpdate = sut.useUpdate(StubResourceRecord, baseEndpoint);
            const record = Factory.build<StubResourceRecord>(
                AndcultureCodeFactoryType.StubResourceRecord,
                {
                    id: 10,
                }
            );

            MockAxios.putSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const UpdateStubComponent = () => {
                const { update } = useUpdate();
                const [record, setRecord] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function updateUser() {
                        const result = await update(record);
                        setRecord(result.resultObject!);
                    }

                    updateUser();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{record != null && record!.name}</div>;
            };

            // Act
            await act(async () => {
                const { unmount } = render(<UpdateStubComponent />);
                unmount();
                // Force a sleep longer than when API promise resolves
                await CoreUtils.sleep(cancellationTestsAssertionDelay);
            });

            // Assert
            expect(isUnmounted).toBeTrue();
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });
    });

    // #endregion useUpdate
});

// #endregion Tests
