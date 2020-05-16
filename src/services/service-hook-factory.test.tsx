import React, { useState, useEffect } from "react";
import { Factory } from "rosie";
import { render, wait } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { StubResourceRecord } from "../tests/stubs/stub-resource-record";
import { ServiceHookFactory } from "./service-hook-factory";
import mockAxios from "../tests/mocks/mock-axios";
import { FactoryType } from "../tests/factories/factory-type";

// ---------------------------------------------------------------------------------------------
// #region Variables
// ---------------------------------------------------------------------------------------------

const baseEndpoint = "users";
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
                FactoryType.StubResourceRecord
            );
            mockAxios.postSuccess(expectedStubRecord);

            const CreateStubComponent = () => {
                const { create } = useCreate();
                const [user, setUser] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function createUser() {
                        const result = await create(new StubResourceRecord());
                        setUser(result.resultObject!);
                    }

                    createUser();
                }, []);

                return <div>{user != null && user!.name}</div>;
            };

            // Act
            const { getByText } = render(<CreateStubComponent />);

            // Assert
            await wait(() => {
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
                UserRecord,
                baseEndpoint
            );

            const record = Factory.build<StubResourceRecord>(
                FactoryType.userRecord
            );
            mockAxios.postSuccess(record, cancellationTestsApiDelay);

            let isUnmounted = false;

            const CreateStubComponent = () => {
                const { create } = useCreate();
                const [user, setUser] = useState<StubResourceRecord>(
                    null as any
                );

                useEffect(() => {
                    async function createUser() {
                        const result = await create(new StubResourceRecord());
                        setUser(result.resultObject!);
                    }

                    createUser();

                    return () => {
                        isUnmounted = true;
                    };
                }, []);

                return <div>{user != null && user!.name}</div>;
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

    // // ---------------------------------------------------------------------------------------------
    // // #region useDelete
    // // ---------------------------------------------------------------------------------------------

    // describe("useDelete", () => {
    //     itReturnsFunction(sut.useDelete, baseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useDelete = sut.useDelete(resourceEndpoint);
    //         const userIdToDelete = 10;

    //         mockAxios.deleteSuccess(new Boolean(true));

    //         const DeleteStubComponent = () => {
    //             const { delete: deleteRecord } = useDelete();
    //             const [isDeleted, setIsDeleted] = useState<boolean>(false);

    //             useEffect(() => {
    //                 async function deleteUser() {
    //                     try {
    //                         const deleteResult = await deleteRecord(
    //                             userIdToDelete
    //                         );
    //                         setIsDeleted(
    //                             (deleteResult.resultObject || false) as boolean
    //                         );
    //                     } catch (e) {}
    //                 }
    //                 deleteUser();
    //             }, []);

    //             return <div>{isDeleted && "deleted"}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<DeleteStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expect(getByText("deleted")).toBeInTheDocument();
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useDelete = sut.useDelete(baseEndpoint);
    //         const record = Factory.build<StubResourceRecord>(FactoryType.userRecord, {
    //             id: 10,
    //         });
    //         mockAxios.deleteSuccess(record, cancellationTestsApiDelay);
    //         let isUnmounted = false;

    //         const DeleteStubComponent = () => {
    //             const { delete: deleteRecord } = useDelete();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function deleteUser() {
    //                     await deleteRecord(record.id!);
    //                     setUser(record);
    //                 }

    //                 deleteUser();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{user != null && user!.id}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<DeleteStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useDelete

    // // ---------------------------------------------------------------------------------------------
    // // #region useGet
    // // ---------------------------------------------------------------------------------------------

    // describe("useGet", () => {
    //     itReturnsFunction(sut.useGet, baseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useGet = sut.useGet(UserRecord, resourceEndpoint);
    //         const expectedStubRecord = Factory.build<StubResourceRecord>(
    //             FactoryType.userRecord,
    //             { id: 10 }
    //         );

    //         mockAxios.getSuccess(expectedStubRecord);

    //         const GetStubComponent = () => {
    //             const { get } = useGet();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function getUser() {
    //                     try {
    //                         const result = await get({
    //                             id: expectedStubRecord.id!,
    //                         });
    //                         setUser(result.resultObject!);
    //                     } catch (e) {}
    //                 }

    //                 getUser();
    //             }, []);

    //             return <div>{user != null && user.name}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<GetStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expect(
    //                 getByText(expectedStubRecord.name!)
    //             ).toBeInTheDocument();
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useGet = sut.useGet(UserRecord, baseEndpoint);
    //         const record = Factory.build<StubResourceRecord>(FactoryType.userRecord, {
    //             id: 10,
    //         });
    //         mockAxios.getSuccess(record, cancellationTestsApiDelay);
    //         let isUnmounted = false;

    //         const GetStubComponent = () => {
    //             const { get } = useGet();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function getUser() {
    //                     const result = await get(record.id!);
    //                     setUser(result.resultObject!);
    //                 }

    //                 getUser();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{user != null && user!.name}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<GetStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useGet

    // // ---------------------------------------------------------------------------------------------
    // // #region useList
    // // ---------------------------------------------------------------------------------------------

    // describe("useList", () => {
    //     itReturnsFunction(sut.useList, baseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useList = sut.useList(UserRecord, baseEndpoint);
    //         const expectedStubRecords = Factory.buildList(
    //             FactoryType.userRecord,
    //             2
    //         ) as UserRecord[];

    //         mockAxios.listSuccess(expectedStubRecords);

    //         const ListStubComponent = () => {
    //             const { list } = useList();
    //             const [users, setUsers] = useState<UserRecord[]>([]);

    //             useEffect(() => {
    //                 async function listUsers() {
    //                     try {
    //                         const result = await list();
    //                         setUsers(result.resultObjects!);
    //                     } catch (e) {}
    //                 }
    //                 listUsers();
    //             }, []);

    //             return <div>{users != null && users.map((u) => u.name!)}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<ListStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expectedStubRecords.forEach((expected) => {
    //                 expect(
    //                     getByText(expected.name!, { exact: false })
    //                 ).toBeInTheDocument();
    //             });
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useList = sut.useList(UserRecord, baseEndpoint);
    //         const record = Factory.build<StubResourceRecord>(FactoryType.userRecord, {
    //             id: 10,
    //         });
    //         mockAxios.getSuccess(record, cancellationTestsApiDelay);
    //         let isUnmounted = false;

    //         const ListStubComponent = () => {
    //             const { list } = useList();
    //             const [users, setUsers] = useState<UserRecord[]>([]);

    //             useEffect(() => {
    //                 async function listUsers() {
    //                     const result = await list();
    //                     setUsers(result.resultObjects!);
    //                 }

    //                 listUsers();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{users != null && users.map((u) => u.name!)}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<ListStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useList

    // // ---------------------------------------------------------------------------------------------
    // // #region useNestedCreate
    // // ---------------------------------------------------------------------------------------------

    // describe("useNestedCreate", () => {
    //     itReturnsFunction(sut.useNestedCreate, nestedBaseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useCreate = sut.useNestedCreate<UserRecord, StubNestedParams>(
    //             UserRecord,
    //             nestedBaseEndpoint
    //         );
    //         const expectedStubRecord = Factory.build<StubResourceRecord>(
    //             FactoryType.userRecord
    //         );

    //         mockAxios.postSuccess(expectedStubRecord);

    //         const NestedCreateStubComponent = () => {
    //             const { create } = useCreate();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function createLogin() {
    //                     const result = await create(new StubResourceRecord(), {
    //                         nestedId: 10,
    //                     });
    //                     setUser(result.resultObject!);
    //                 }
    //                 createLogin();
    //             }, []);

    //             return <div>{user != null && user!.name}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<NestedCreateStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expect(
    //                 getByText(expectedStubRecord.name!)
    //             ).toBeInTheDocument();
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useCreate = sut.useNestedCreate<UserRecord, StubNestedParams>(
    //             UserRecord,
    //             nestedBaseEndpoint
    //         );
    //         const record = Factory.build<StubResourceRecord>(FactoryType.userRecord);

    //         mockAxios.postSuccess(record, cancellationTestsApiDelay);

    //         let isUnmounted = false;

    //         const NestedCreateStubComponent = () => {
    //             const { create } = useCreate();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function createUser() {
    //                     const result = await create(new StubResourceRecord(), {
    //                         nestedId: 10,
    //                     });
    //                     setUser(result.resultObject!);
    //                 }

    //                 createUser();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{user != null && user.name!}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<NestedCreateStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useNestedCreate

    // // ---------------------------------------------------------------------------------------------
    // // #region useNestedList
    // // ---------------------------------------------------------------------------------------------

    // describe("useNestedList", () => {
    //     itReturnsFunction(sut.useNestedList, nestedBaseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useList = sut.useNestedList<UserRecord, StubNestedParams, {}>(
    //             UserRecord,
    //             nestedBaseEndpoint
    //         );
    //         const expectedStubRecords = Factory.buildList(
    //             FactoryType.userRecord,
    //             2
    //         ) as UserRecord[];

    //         mockAxios.listSuccess(expectedStubRecords);

    //         const NestedListStubComponent = () => {
    //             const { list } = useList();
    //             const [users, setUsers] = useState<UserRecord[]>([]);

    //             useEffect(() => {
    //                 async function getUsers() {
    //                     const result = await list({
    //                         nestedId: 10,
    //                     });
    //                     setUsers(result.resultObjects!);
    //                 }
    //                 getUsers();
    //             }, []);

    //             return <div>{users != null && users.map((u) => u.name!)}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<NestedListStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expectedStubRecords.forEach((expected) => {
    //                 expect(
    //                     getByText(expected.name!, { exact: false })
    //                 ).toBeInTheDocument();
    //             });
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useList = sut.useNestedList<UserRecord, StubNestedParams, {}>(
    //             UserRecord,
    //             nestedBaseEndpoint
    //         );
    //         const records = Factory.buildList(
    //             FactoryType.userRecord,
    //             2
    //         ) as UserRecord[];

    //         mockAxios.getSuccess(records, cancellationTestsApiDelay);

    //         let isUnmounted = false;

    //         const NestedListStubComponent = () => {
    //             const { list } = useList();
    //             const [users, setUsers] = useState<UserRecord[]>([]);

    //             useEffect(() => {
    //                 async function listUsers() {
    //                     const result = await list({ nestedId: 10 });
    //                     setUsers(result.resultObjects!);
    //                 }

    //                 listUsers();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{users != null && users.map((u) => u.name!)}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<NestedListStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useNestedList

    // // ---------------------------------------------------------------------------------------------
    // // #region useUpdate
    // // ---------------------------------------------------------------------------------------------

    // describe("useUpdate", () => {
    //     itReturnsFunction(sut.useUpdate, baseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useUpdate = sut.useUpdate(UserRecord, resourceEndpoint);
    //         const expectedStubRecord = Factory.build<StubResourceRecord>(
    //             FactoryType.userRecord,
    //             { id: 10 }
    //         );

    //         mockAxios.putSuccess(expectedStubRecord);

    //         const UpdateStubComponent = () => {
    //             const { update } = useUpdate();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function updateUser() {
    //                     const result = await update(expectedStubRecord);
    //                     setUser(result.resultObject!);
    //                 }
    //                 updateUser();
    //             }, []);

    //             return <div>{user != null && user!.name}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<UpdateStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expect(
    //                 getByText(expectedStubRecord.name!)
    //             ).toBeInTheDocument();
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useUpdate = sut.useUpdate(UserRecord, baseEndpoint);
    //         const record = Factory.build<StubResourceRecord>(FactoryType.userRecord, {
    //             id: 10,
    //         });

    //         mockAxios.putSuccess(record, cancellationTestsApiDelay);

    //         let isUnmounted = false;

    //         const UpdateStubComponent = () => {
    //             const { update } = useUpdate();
    //             const [user, setUser] = useState<StubResourceRecord>(null as any);

    //             useEffect(() => {
    //                 async function updateUser() {
    //                     const result = await update(record);
    //                     setUser(result.resultObject!);
    //                 }

    //                 updateUser();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{user != null && user!.name}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<UpdateStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useUpdate

    // // ---------------------------------------------------------------------------------------------
    // // #region useBulkUpdate
    // // ---------------------------------------------------------------------------------------------

    // describe("useBulkUpdate", () => {
    //     itReturnsFunction(sut.useBulkUpdate, baseEndpoint);

    //     it("when not-cancelled, resolves successfully", async () => {
    //         // Arrange
    //         const useBulkUpdate = sut.useBulkUpdate(
    //             UserRecord,
    //             resourceEndpoint
    //         );
    //         const expectedStubRecord = Factory.build<StubResourceRecord>(
    //             FactoryType.userRecord,
    //             { id: 10 }
    //         );

    //         mockAxios.putSuccess([expectedStubRecord]);

    //         const UpdateStubComponent = () => {
    //             const { update } = useBulkUpdate();
    //             const [users, setUsers] = useState<Array<StubResourceRecord>>(
    //                 null as any
    //             );

    //             useEffect(() => {
    //                 async function updateUser() {
    //                     const result = await update([expectedStubRecord], {
    //                         id: expectedStubRecord.id!,
    //                     });
    //                     setUsers(result.resultObjects!);
    //                 }
    //                 updateUser();
    //             }, []);

    //             return <div>{users != null && users[0].name}</div>;
    //         };

    //         // Act
    //         const { getByText } = render(<UpdateStubComponent />);

    //         // Assert
    //         await wait(() => {
    //             expect(
    //                 getByText(expectedStubRecord.name!)
    //             ).toBeInTheDocument();
    //         });
    //     });

    //     /**
    //      * Test ensures service hook factory in fact protects against a react error
    //      * when the component is unmounted before the promise resolves.
    //      *
    //      * See ServiceFactory.test.tsx for test that verifies react error thrown
    //      */
    //     it("when unmounted before resolution, promise is cancelled successfully", async () => {
    //         // Arrange
    //         const consoleErrorSpy = jest.spyOn(console, "error");

    //         const useBulkUpdate = sut.useBulkUpdate(UserRecord, baseEndpoint);
    //         const record = Factory.build<StubResourceRecord>(FactoryType.userRecord, {
    //             id: 10,
    //         });

    //         mockAxios.putSuccess(record, cancellationTestsApiDelay);

    //         let isUnmounted = false;

    //         const UpdateStubComponent = () => {
    //             const { update } = useBulkUpdate();
    //             const [users, setUsers] = useState<Array<StubResourceRecord>>(
    //                 null as any
    //             );

    //             useEffect(() => {
    //                 async function updateUser() {
    //                     const result = await update([record], {
    //                         id: record.id!,
    //                     });
    //                     setUsers(result.resultObjects!);
    //                 }

    //                 updateUser();

    //                 return () => {
    //                     isUnmounted = true;
    //                 };
    //             }, []);

    //             return <div>{users != null && users[0].name}</div>;
    //         };

    //         // Act
    //         await act(async () => {
    //             const { unmount } = render(<UpdateStubComponent />);
    //             unmount();
    //             // Force a sleep longer than when API promise resolves
    //             await CoreUtils.sleep(cancellationTestsAssertionDelay);
    //         });

    //         // Assert
    //         expect(isUnmounted).toBeTrue();
    //         expect(consoleErrorSpy).not.toHaveBeenCalled();
    //     });
    // });

    // // #endregion useBulkUpdate
});

// #endregion Tests
