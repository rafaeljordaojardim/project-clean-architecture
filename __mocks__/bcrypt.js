const MissingParamError = require('../src/utils/errors/missing-param-error')

module.exports = {
  isValid: true,
  hash: '',
  value: '',
  async compare (value, hash) {
    if (!value) {
      throw new MissingParamError('value')
    }

    if (!hash) {
      throw new MissingParamError('hash')
    }
    this.value = value
    this.hash = hash
    return this.isValid
  }
}
