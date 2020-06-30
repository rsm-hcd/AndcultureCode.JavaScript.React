import React, { useEffect } from "react";
import "jest-extended";
import faker from "faker";
import {
    BaseEnglishUnitedStates,
    Culture,
    LocalizationUtils,
} from "andculturecode-javascript-core";
import { useLocalization } from "./use-localization";
import { render, wait, waitFor } from "@testing-library/react";
import { initReactI18next } from "react-i18next";

describe("useLocalization", () => {
    test("when invalid key, returns key", async () => {
        // Arrange
        const expectedKey = faker.random.word();
        const culture: Partial<Culture<any>> = { resources: {} };
        const EnglishUnitedStates = LocalizationUtils.cultureFactory<any>(
            BaseEnglishUnitedStates,
            culture
        );

        const TestComponent = () => {
            const { t } = useLocalization<any>();

            return <p>{t(expectedKey)}</p>;
        };

        const TestApp = () => {
            LocalizationUtils.initialize(initReactI18next, [
                EnglishUnitedStates,
            ]);

            return <TestComponent />;
        };

        // Act
        const { getByText } = render(<TestApp />);

        // Assert
        await waitFor(() => {
            expect(getByText(expectedKey)).toBeInTheDocument();
        });
    });

    test("when valid key, returns translation", async () => {
        // Arrange
        const key = "testkey";
        const expectedValue = faker.random.words();
        const culture: Partial<Culture<any>> = { resources: {} };
        culture.resources[key] = expectedValue;

        const EnglishUnitedStates = LocalizationUtils.cultureFactory<any>(
            BaseEnglishUnitedStates,
            culture
        );

        const TestComponent = () => {
            const { t } = useLocalization<any>();

            return <p>{t(key)}</p>;
        };

        const TestApp = () => {
            LocalizationUtils.initialize(initReactI18next, [
                EnglishUnitedStates,
            ]);

            return <TestComponent />;
        };

        // Act
        const { getByText } = render(<TestApp />);

        // Assert
        await waitFor(() => {
            expect(getByText(expectedValue)).toBeInTheDocument();
        });
    });
});
