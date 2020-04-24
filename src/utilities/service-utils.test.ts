import { ServiceUtils } from "./service-utils";
import { StubResourceRecord } from "../tests/stubs/stub-resource-record";
import { Factory } from "rosie";
import { AxiosResponse } from "axios";
import { FactoryType } from "../tests/factories/factory-type";

describe("ServiceUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region mapAxiosResponse
    // -----------------------------------------------------------------------------------------

    describe("mapAxiosResponse", () => {
        test("when axiosResponse is undefined, it returns undefined", () => {
            // Arrange & Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                undefined
            );

            // Assert
            expect(result).toBeUndefined();
        });

        test("when axiosResponse is null, it returns null", () => {
            // Arrange & Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                null
            );

            // Assert
            expect(result).toBeNull();
        });

        test("when response.data is undefined, it returns the mapped resultObject as undefined", () => {
            // Arrange
            const axiosResponse = Factory.build<AxiosResponse>(
                FactoryType.AxiosResponse,
                { data: undefined }
            );

            // Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                axiosResponse
            );

            // Assert
            expect(result.resultObject).toBeUndefined();
        });

        test("when response.data is null, it returns the mapped resultObject as undefined", () => {
            // Arrange
            const axiosResponse = Factory.build<AxiosResponse>(
                FactoryType.AxiosResponse,
                { data: null }
            );

            // Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                axiosResponse
            );

            // Assert
            expect(result.resultObject).toBeUndefined();
        });

        test("when response.data.resultObject is undefined, it returns the mapped resultObject as undefined", () => {
            // Arrange
            const axiosResponse = Factory.build<AxiosResponse>(
                FactoryType.AxiosResponse,
                {
                    data: {
                        resultObject: undefined,
                    },
                }
            );

            // Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                axiosResponse
            );

            // Assert
            expect(result.resultObject).toBeUndefined();
        });

        test("when response.data.resultObject is null, it returns the mapped resultObject as undefined", () => {
            // Arrange
            const axiosResponse = Factory.build<AxiosResponse>(
                FactoryType.AxiosResponse,
                {
                    data: {
                        resultObject: null,
                    },
                }
            );

            // Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                axiosResponse
            );

            // Assert
            expect(result.resultObject).toBeUndefined();
        });

        test("it returns rowCount as 1", () => {
            // Arrange
            const axiosResponse = Factory.build<AxiosResponse>(
                FactoryType.AxiosResponse
            );

            // Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                axiosResponse
            );

            // Assert
            expect(result.rowCount).toBe(1);
        });

        test("it returns the mapped status from the original response", () => {
            // Arrange
            const axiosResponse = Factory.build<AxiosResponse>(
                FactoryType.AxiosResponse
            );

            // Act
            const result = ServiceUtils.mapAxiosResponse(
                StubResourceRecord,
                axiosResponse
            );

            // Assert
            expect(result.status).toBe(axiosResponse.status);
        });
    });

    // #endregion mapAxiosResponse

    // -----------------------------------------------------------------------------------------
    // #region mapPagedAxiosResponse
    // -----------------------------------------------------------------------------------------

    describe("mapPagedAxiosResponse", () => {
        test("when axiosResponse is undefined, it returns undefined", () => {
            // Arrange & Act
            const result = ServiceUtils.mapPagedAxiosResponse(
                StubResourceRecord,
                undefined
            );

            // Assert
            expect(result).toBeUndefined();
        });

        test("when axiosResponse is null, it returns null", () => {
            // Arrange & Act
            const result = ServiceUtils.mapPagedAxiosResponse(
                StubResourceRecord,
                null
            );

            // Assert
            expect(result).toBeNull();
        });
    });

    // #endregion mapPagedAxiosResponse
});
