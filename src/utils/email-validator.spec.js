jest.mock('validator', () => ({

  isEmailValid: true,
  isEmail (email) {
    this.email = email
    return this.isEmailValid
  }

}))
const EmailValidator = require('./email-validator.')
const validator = require('validator')
const MissingParamError = require('./errors/missing-param-error')

const makeSut = () => {
  return new EmailValidator()
}
describe('Email validator', () => {
  console.error = jest.fn()
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('valid_email@email.com')
    expect(validator.email).toBe('valid_email@email.com')
  })

  test('Should throw if no email are provided', async () => {
    const sut = makeSut()
    expect(() => sut.isValid()).toThrow(new MissingParamError('email'))
  })
})
