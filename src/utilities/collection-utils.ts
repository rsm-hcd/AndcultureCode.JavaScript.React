import { List } from "immutable";

// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------

/**
 * Checks for values in a collection/object. Returns false if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
 * CollectionUtils.hasValues([]) or CollectionUtils.hasValues([], [], [])
 *
 * @param {(...Array<(any[] | List<any>)} collections
 * @returns {boolean} False if `collections` is null/undefined, or every element is also null/undefined,
 * or has no sub-elements. True if any element has sub-elements.
 */
const _hasValues = (
    ...collections: Array<any[] | List<any> | undefined>
): boolean => {
    if (collections == null) {
        return false;
    }

    let hasValues = false;
    collections.forEach((collection: any[] | List<any> | undefined) => {
        if (!_isEmpty(collection)) {
            hasValues = true;
        }
    });
    return hasValues;
};

/**
 * Checks for values in a collection/object. Returns true if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
 * CollectionUtils.isEmpty([]) or CollectionUtils.isEmpty([], [], [])
 *
 * @param {(...Array<(any[] | List<any>)} collections
 * @returns {boolean} True if `collections` is null/undefined, or every element is also null/undefined,
 * or has no sub-elements. False if any element has sub-elements.
 */
const _isEmpty = (
    ...collections: Array<any[] | List<any> | undefined>
): boolean => {
    if (collections == null) {
        return true;
    }

    let isEmpty = true;

    collections.forEach((collection: any[] | List<any> | undefined) => {
        if (collection == null) {
            return;
        }
        if (collection instanceof List) {
            const collectionList = collection as List<any>;
            if (collectionList.size !== 0) {
                isEmpty = false;
            }
        } else {
            const collectionArray = collection as any[];
            if (collectionArray.length !== 0) {
                isEmpty = false;
            }
        }
    });

    return isEmpty;
};

/**
 * Checks if there aren't any values in a collection/object. Returns false if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
 * CollectionUtils.isNotEmpty([]) or CollectionUtils.isNotEmpty([], [], [])
 *
 * @param {(...Array<(any[] | List<any>)} collections
 * @returns {boolean} False if `collections` is null/undefined, or every element is also null/undefined,
 * or has no sub-elements. True if any element has sub-elements.
 */
const _isNotEmpty = (
    ...collections: Array<any[] | List<any> | undefined>
): boolean => {
    return !_isEmpty(...collections);
};

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const CollectionUtils = {
    hasValues: _hasValues,
    isEmpty: _isEmpty,
    isNotEmpty: _isNotEmpty,
};

// #endregion Exports
