const validator = require('validator')
class EmailValidator {
  isValid (email) {
    this.email = email
    return validator.isEmail(email)
  }
}

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

  test('Should return false if validator returns true', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
})