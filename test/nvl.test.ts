import nvl from '../dist';

describe('NVL', () => {
	it('shoud return `value` when `value` is not blank value', () => {
		const now = new Date();
		const emptyArr = [];
		const emptyObj = {};

		expect(nvl(now, new Date(0))).toBe(now);
		expect(nvl(emptyArr, [1])).toBe(emptyArr);
		expect(nvl(emptyObj, { a: 1, b: 2 })).toBe(emptyObj);
		expect(nvl(false, true)).toStrictEqual(false);
	});
	it('shoud return `fallbackValue` when `value` is undefined.', () => {
		const notYet: undefined = void 0;
		const now = new Date();

		expect(nvl(notYet, now)).toBe(now);
	});
	it('shoud return `fallbackValue` when `value` is null.', () => {
		const nil: null = null;
		const now = new Date();

		expect(nvl(nil, now)).toBe(now);
	});
});
