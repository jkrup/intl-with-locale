# IntlWithLocale
## Usage

```
const IntlWithLocale = require('intl-with-locale')

// Declare an intlWithLocale singleton instance to generate
// all further Intl objects with the same locale.
const intlWithLocale = new IntlWithLocale('de-DE'); // defaults to 'en-US'

const params = { style: 'currency', currency: 'USD' }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters
let format = intlWithLocale.NumberFormat(params).format

console.log(intlWithLocale.getLocale()) // de-DE
console.log(format(1)) // 1,00 $
console.log(format(0.10)) // 0,10 $
console.log(format(10000)) // 10.000,00 $
console.log(format(1000.1)) // 1.000,10 $

format = intlWithLocale.setLocale('en-US').NumberFormat(params).format

console.log(intlWithLocale.getLocale()) // en-US
console.log(format(1)) // $1.00
console.log(format(0.10)) // $0.10
console.log(format(10000)) // $10,000.00
console.log(format(1000.1)) // $1,000.10
```

## API
### `intlWithLocale` instance has 3 class methods:

*getLocale* - gets the current locale value

*setLocale* - changes/sets the current locale value. Returns `this` so it can be chained with NumberFormat

*NumberFormat* - Returns a curried version of Intl.NumberFormat with the specified locale (from getLocale) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters
