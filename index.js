'use strict';

module.exports = function nvl(value, replaceWith) {
	return (typeof value !== 'undefined') && (value != null) ? value : replaceWith;
};
