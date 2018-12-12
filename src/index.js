const IntlWithLocale = function (locale = 'en-US') {
  // Private locale variable with getter / setter
  let _locale = locale

  this.setLocale = function (locale) {
    _locale = locale
    return this;
  }

  this.getLocale = () => _locale

  this.NumberFormat = function (opts) {
    return Intl.NumberFormat(_locale, opts)
  }
}

module.exports = IntlWithLocale
