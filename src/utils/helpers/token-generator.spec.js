class TokenGenerator {
  async generate (id) {
    return null
  }
}

describe(('Token Generator'), () => {
  test('Should return null if JWT returns null', async () => {
    const sut = new TokenGenerator()
    const token = await sut.generate('')
    expect(token).toBeNull()
  })
})
