# AndcultureCode.JavaScript.React

[![Build Status](https://travis-ci.org/AndcultureCode/AndcultureCode.JavaScript.React.svg?branch=master)](https://travis-ci.org/AndcultureCode/AndcultureCode.JavaScript.React)
[![codecov](https://codecov.io/gh/AndcultureCode/AndcultureCode.JavaScript.React/branch/master/graph/badge.svg)](https://codecov.io/gh/AndcultureCode/AndcultureCode.JavaScript.React)

Common patterns, functions, etc... used when building react applications

## Getting started

This package is installed via npm or yarn

```shell
# npm
npm install --save-dev andculturecode-javascript-react

# yarn
yarn add andculturecode-javascript-react --dev
```

From there you can import the variety of modules.

```typescript
import {
    AuthenticatedRoute,
    NestedRoute,
    NestedRoutes,
} from "andculturecode-javascript-react";
```

## Documentation

[Full API documentation](docs/README.md)

## Peer dependencies

This package wraps several external packages for our own configuration and ease of use, such as `axios`, `i18next`, `react-router-dom`, etc. These will need to be installed alongside this package, even if you do not plan on leveraging features that rely on them.

# Contributing

Information on contributing to this repo is in the [Contributing Guide](CONTRIBUTING.md)
