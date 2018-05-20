/**
 * Return a fallback value from `replaceWith` when a main `value` is blank (`undefined` or `null`).
 *
 * @template T Type.
 * @param {T} value Main value.
 * @param {T} replaceWith Fallback value.
 * @returns {T}
 */
declare function nvl<T>(value: T, replaceWith: T): T;

/**
 * Return a fallback value from `replaceWith` when a main `value` is blank (`undefined` or `null`).
 *
 * @param {*} value Main value.
 * @param {*} replaceWith Fallback value.
 * @returns {*}
 */
declare function nvl(value: any, replaceWith: any): any;

export = nvl;
