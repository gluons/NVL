'use strict';

/**
 * Replace a blank value with fallback value.
 *
 * @template T Value type
 * @param {(T | null | undefined)} value Value
 * @param {T} fallbackValue Fallback value
 * @returns {T}
 */
function nvl<T>(value: T | null | undefined, fallbackValue: T): T;
/**
 * Replace a blank value with fallback value.
 *
 * @param {any} value Value
 * @param {any} fallbackValue Fallback value
 * @returns {any}
 */
function nvl(value: any, fallbackValue: any): any;
function nvl<T>(value: T, fallbackValue: T): T {
	return typeof value !== 'undefined' && value != null
		? value
		: fallbackValue;
}

export = nvl;
