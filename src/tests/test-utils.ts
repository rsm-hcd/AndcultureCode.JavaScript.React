// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Wrap timeout in a promise so tests can easily block execution for testing time
 * @param milliseconds
 */
const sleep = (milliseconds: number, debug: boolean = false) => {
    if (debug) {
        console.log("sleep start");
    }

    return new Promise((resolve) =>
        setTimeout(() => {
            if (debug) {
                console.log("sleep end");
            }

            resolve();
        }, milliseconds)
    );
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export const TestUtils = {
    sleep,
};

// #endregion Export
