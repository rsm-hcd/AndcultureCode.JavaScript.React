import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { RouteDefinition } from "../../interfaces/route-definition";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface AuthenticatedRouteProps extends RouteComponentProps<any> {
    redirectToIfUnauthenticated?: string;
    route: RouteDefinition;
    render: (props: any) => any;
}

// #endregion Interfaces

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = (
    props: AuthenticatedRouteProps
) => {
    const { redirectToIfUnauthenticated, render } = props;
    const isAuthenticated = true;

    const renderIfAuthenticated = (props: any): any => {
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
