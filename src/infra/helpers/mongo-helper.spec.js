const mongoHelper = require('./mongo-helper')

describe(('Mongo Helper'), () => {
  test('Should reconnect when getDb() is involked and client is disconnect', async () => {
    const sut = mongoHelper
    await sut.connect(process.env.MONGO_URL)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getDb()
    expect(sut.db).toBeTruthy()
  })
})
