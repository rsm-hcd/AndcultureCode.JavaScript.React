import { Factory } from "rosie";
import { FactoryType } from "../tests/factories/factory-type";
import "jest-extended";
import { RouteUtils } from "./route-utils";
import { RouteDefinition } from "../interfaces/route-definition";
import { RouteMap } from "../interfaces/route-map";

describe("RouteUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region appendQueryParams
    // -----------------------------------------------------------------------------------------

    describe("appendQueryParams", () => {
        test("when path is null, it returns an empty string", () => {
            // Arrange
            const path = null;
            const queryParams = {};

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe("");
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

    // -----------------------------------------------------------------------------------------
    // #region debugRoutes
    // -----------------------------------------------------------------------------------------

    describe("debugRoutes", () => {
        test("when given a route map with a single route, it calls console.log once", () => {
            // Arrange
            const routeMap = Factory.build<RouteMap>(FactoryType.RouteMap);
            const consoleLogSpy = jest.spyOn(console, "log");

            // Act
            RouteUtils.debugRoutes(routeMap);

            // Assert
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        });

        test("when given a route map with multiple routes, it calls console.log at least once", () => {
            // Arrange
            const routeMap = Factory.build<RouteMap>(FactoryType.RouteMap, {
                routes: Factory.build<RouteDefinition>(
                    FactoryType.RouteDefinition.Nested
                ),
            });
            const consoleLogSpy = jest.spyOn(console, "log");

            // Act
            RouteUtils.debugRoutes(routeMap);

            // Assert
            expect(consoleLogSpy).toHaveBeenCalled();
            expect(consoleLogSpy).not.toHaveBeenCalledTimes(1);
        });
    });

    // #endregion debugRoutes

    // -----------------------------------------------------------------------------------------
    // #region getFlattenedRoutes
    // -----------------------------------------------------------------------------------------

    describe("getFlattenedRoutes", () => {
        test("when a route has nested routes, it returns a flattened list", () => {
            // Arrange
            const parentRoute = Factory.build<RouteDefinition>(
                FactoryType.RouteDefinition.Nested
            );
            const routes = [parentRoute];

            // Act
            const result = RouteUtils.getFlattenedRoutes(routes);

            // Assert
            expect(result).toHaveLength(2);
        });

        test("when routes are already in a flattened state, it returns an equivalent array", () => {
            // Arrange
            const routes = Factory.buildList(
                FactoryType.RouteDefinition.Default,
                3
            );

            // Act
            const result = RouteUtils.getFlattenedRoutes(routes);

            // Assert
            expect(result).toHaveLength(routes.length);
            expect(result).toStrictEqual(routes);
        });
    });

    // #endregion getFlattenedRoutes

    // -----------------------------------------------------------------------------------------
    // #region getUrl
    // -----------------------------------------------------------------------------------------

    describe("getUrl", () => {
        test("when given a path without replaceable params, it returns the unmodified path", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = {};

            // Act
            const result = RouteUtils.getUrl(path, pathParams);

            // Assert
            expect(result).toBe(path);
        });

        test("when given a path with replaceable params, it returns the path with replaced values", () => {
            // Arrange
            const path = "users/:userId/roles/:id";
            const pathParams = {
                userId: 1,
                id: 1,
            };

            // Act
            const result = RouteUtils.getUrl(path, pathParams);

            // Assert
            expect(result).toBe("users/1/roles/1");
        });
    });

    // #endregion getUrl

    // -----------------------------------------------------------------------------------------
    // #region getUrlFromPath
    // -----------------------------------------------------------------------------------------

    describe("getUrlFromPath", () => {
        test("when given a path without replaceable params, it returns the unmodified path", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = {};
            const queryParams = {};

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBe(path);
        });

        test("when given a path with replaceable params, it returns the path with replaced values", () => {
            // Arrange
            const path = "users/:userId/roles/:id";
            const pathParams = {
                userId: 1,
                id: 1,
            };
            const queryParams = {};

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBe("users/1/roles/1");
        });

        test("when given a path with query params, it returns the path with appended values", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = {};
            const queryParams = {
                skip: 0,
                take: 10,
            };

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBe("some/nested/route?skip=0&take=10");
        });

        test("when given a null path, it returns null", () => {
            // Arrange
            const path = null;
            const pathParams = {};
            const queryParams = {};

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBeNull();
        });
    });

    // #endregion getUrlFromPath

    // -----------------------------------------------------------------------------------------
    // #region replacePathParams
    // -----------------------------------------------------------------------------------------

    describe("replacePathParams", () => {});

    // #endregion replacePathParams
});
