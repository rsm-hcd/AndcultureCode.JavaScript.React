import { useCallback } from "react";
import { useTranslation } from "react-i18next";

/**
 * Typed wrapper of i18n `useTranslation` hook
 */
const useLocalization = <TKeys>() => {
    const { t } = useTranslation();

    const translate = <K extends keyof TKeys>(key: K, options?: object) =>
        t(key as string, options);

    return {
        t: useCallback(translate, [t]),
    };
};

export { useLocalization };
