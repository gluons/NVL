/**
 * Return a fallback value from `replaceWith` when a main `value` is blank (`undefined` or `null`).
 *
 * @param {*} value Main value.
 * @param {*} replaceWith Fallback value.
 * @returns {*}
 */
declare function nvl(value: any, replaceWith: any): any;

export = nvl;
