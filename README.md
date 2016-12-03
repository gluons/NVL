# NVL
[![license](https://img.shields.io/github/license/gluons/NVL.svg?style=flat-square)](https://github.com/gluons/NVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/nvl.svg?style=flat-square)](https://www.npmjs.com/package/nvl)
[![npm](https://img.shields.io/npm/dt/nvl.svg?style=flat-square)](https://www.npmjs.com/package/nvl)
[![Travis](https://img.shields.io/travis/gluons/NVL.svg?style=flat-square)](https://travis-ci.org/gluons/NVL)

🚮 Replace a blank value with your value.

## Installation
```
npm install nvl
```

## Usage
```javascript
const nvl = require('nvl');

let notYet = void 0; // undefined
let nil = null;

nvl(notYet, true); // -> true
nvl(nil, 1); // -> 1
nvl([], [1]); // -> []
nvl({}, { a: 1, b: 2}); // -> {}
nvl(false, true); // -> false
```
