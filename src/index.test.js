/* global describe, expect, it, jest */
const IntlWithLocale = require('./index')

describe('IntlWithLocale', () => {
  const intlWithLocale = new IntlWithLocale()

  it('can get default Locale', () => {
    expect(
      intlWithLocale.getLocale()
    ).toBe('en-US')
  })

  it('calls Intl with appropriate params', () => {
    const params = { style: 'currency', currency: 'USD' }
    const spy = jest.spyOn(Intl, 'NumberFormat')

    intlWithLocale.NumberFormat(params)
    expect(spy).toHaveBeenLastCalledWith('en-US', params)

    intlWithLocale.setLocale('de-DE')
    intlWithLocale.NumberFormat(params)

    expect(spy).toHaveBeenLastCalledWith('de-DE', params)
  })

  it('actually makes a formatter', () => {
    const params = { style: 'currency', currency: 'USD' }
    var f = new intlWithLocale.NumberFormat(params)

    Intl.NumberFormat.mockRestore() // restore spied method
    expect(f).toBeInstanceOf(Intl.NumberFormat)
  })
})
