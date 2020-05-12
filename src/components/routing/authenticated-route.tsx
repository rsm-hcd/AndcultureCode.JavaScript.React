import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { RouteDefinition } from "../../interfaces/route-definition";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface AuthenticatedRouteProps {
    /**
     * Flag to determine whether the current user is authenticated or not.
     *
     * @type {boolean}
     * @memberof AuthenticatedRouteProps
     */
    isAuthenticated: boolean;

    /**
     * Route to redirect to if the current user is not authenticated.
     *
     * @type {string}
     * @memberof UnauthenticatedRedirectProps
     */
    redirectToIfUnauthenticated?: string;
}

interface AuthenticatedRouteComponentProps
    extends RouteComponentProps<any>,
        AuthenticatedRouteProps {
    route: RouteDefinition;
    render: (props: any) => any;
}

// #endregion Interfaces

const AuthenticatedRoute: React.FC<AuthenticatedRouteComponentProps> = (
    props: AuthenticatedRouteComponentProps
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

export {
    AuthenticatedRoute,
    AuthenticatedRouteComponentProps,
    AuthenticatedRouteProps,
};

// #endregion Exports
