import React from "react";
import { RedirectDefinition } from "../../interfaces/redirect-definition";
import { Redirect } from "react-router-dom";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface RedirectsProps {
    redirects: RedirectDefinition[];
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

/**
 * Simple way to redirect a flat array of RedirectDefinitions
 */
const Redirects: React.FC<RedirectsProps> = (props: RedirectsProps) => {
    const { redirects } = props;

    // TODO: Remove Fragment when issue fixed https://github.com/microsoft/TypeScript/issues/21699
    return (
        <React.Fragment>
            {redirects.map((redirect: RedirectDefinition, i: number) => (
                <Redirect key={i} from={redirect.from} to={redirect.to} />
            ))}
        </React.Fragment>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { Redirects, RedirectsProps };

// #endregion Exports
