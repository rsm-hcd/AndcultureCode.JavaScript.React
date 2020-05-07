import { ServiceUtils } from "./service-utils";
import { StubResourceRecord } from "../tests/stubs/stub-resource-record";
import { Factory } from "rosie";
import { AxiosResponse } from "axios";
import { FactoryType } from "../tests/factories/factory-type";
import { ResultRecord } from "../view-models/result-record";
import "jest-extended";
import { RouteUtils } from "./route-utils";

describe("RouteUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region appendQueryParams
    // -----------------------------------------------------------------------------------------

    describe("appendQueryParams", () => {
        test("when path is null, it returns '?'", () => {
            // Arrange
            const path = null;
            const queryParams = {};

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe("?");
        });

        test("when queryParams is null, it returns the unmodified path", () => {
            // Arrange
            const path = "path";
            const queryParams = null;

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe(path);
        });

        test("when queryParams is has a value, it returns the path", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                skip: 1,
                take: 2,
            };

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe("path?skip=1&take=2");
        });
    });

    // #endregion appendQueryParams
});
