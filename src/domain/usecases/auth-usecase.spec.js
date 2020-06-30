const { MissingParamError } = require('../../utils/errors')
class AuthUseCase {
  async auth (email, password) {
    if (!email) {
      throw new MissingParamError('email')
    }
    if (!password) {
      throw new MissingParamError('password')
    }
  }
}
describe(('Auth Use Case'), () => {
  test('Should thorow if no email is provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow(new MissingParamError('email'))
  })

  test('Should thorow if no password is provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth('any_email@anyemail.com')
    expect(promise).rejects.toThrow(new MissingParamError('password'))
  })
})
