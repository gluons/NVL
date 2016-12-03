'use strict';

const assert = require('assert');
const nvl = require('../');

describe('NVL', () => {
	it('shoud return `value` when `value` is not blank value', () => {
		let now = new Date();
		let emptyArr = [];
		let emptyObj = {};
		assert.strictEqual(nvl(now, new Date(0)), now);
		assert.strictEqual(nvl(emptyArr, [1]), emptyArr);
		assert.strictEqual(nvl(emptyObj, { a: 1, b: 2}), emptyObj);
		assert.strictEqual(nvl(false, true), false);
	});
	it('shoud return `replaceWith` when `value` is undefined.', () => {
		let notYet = void 0;
		let now = new Date();
		assert.strictEqual(nvl(notYet, now), now);
	});
	it('shoud return `replaceWith` when `value` is null.', () => {
		let nil = null;
		let now = new Date();
		assert.strictEqual(nvl(nil, now), now);
	});
});
