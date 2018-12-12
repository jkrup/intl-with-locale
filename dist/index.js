"use strict";

var IntlWithLocale = function IntlWithLocale() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  // Private locale variable with getter / setter
  var _locale = locale;

  this.setLocale = function (locale) {
    _locale = locale;
    return this;
  };

  this.getLocale = function () {
    return _locale;
  };

  this.NumberFormat = function (opts) {
    return Intl.NumberFormat(_locale, opts);
  };
};

module.exports = IntlWithLocale;
