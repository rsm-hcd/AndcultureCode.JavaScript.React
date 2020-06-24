import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { RouteDefinition } from "../../interfaces/route-definition";
import { AuthenticatedRoute } from "../../interfaces/authenticated-route";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface AuthenticatedRouteProps
    extends RouteComponentProps<any>,
        AuthenticatedRoute {
    route: RouteDefinition;
    render: (props: any) => any;
}

// #endregion Interfaces

/**
 * Locks a route behind authentication. Can optionally redirect a user to another location if
 * attempting to access the route while unauthenticated.
 */
const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = (
    props: AuthenticatedRouteProps
) => {
    const {
        isAuthenticated,
        redirectToIfUnauthenticated,
        render,
        route,
    } = props;

    const renderIfAuthenticated = (props: any): any => {
        if (isAuthenticated || !route.authRequired) {
            return render(props);
        }

        if (!isAuthenticated && redirectToIfUnauthenticated != null) {
            return (
                <Redirect
                    to={{
                        pathname: redirectToIfUnauthenticated,
                        state: { from: props.location },
                    }}
                />
            );
        }

        return render(props);
    };

    return <Route {...props} render={renderIfAuthenticated} />;
};

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { AuthenticatedRoute, AuthenticatedRouteProps };

// #endregion Exports
