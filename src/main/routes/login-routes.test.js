const request = require('supertest')
const app = require('../config/app')
const MongooHelper = require('../../infra/helpers/mongo-helper')
const bcrypt = require('bcrypt')
let userModel
describe(('Login Routes'), () => {
  beforeAll(async () => {
    await MongooHelper.connect(process.env.MONGO_URL)
    userModel = await MongooHelper.getCollection('users')
  })

  beforeEach(async () => {
    await userModel.deleteMany()
  })

  afterAll(async () => {
    await MongooHelper.disconnect()
  })
  test('Should return 200 when valid credentials are provided', async () => {
    await userModel.insertOne({
      email: 'valid_email@email.com',
      password: bcrypt.hashSync('hashed_password', 10)
    })
    await request(app)
      .post('/api/login')
      .send({
        email: 'valid_email@email.com',
        password: 'hashed_password'
      })
      .expect(200)
  })

  test('Should return 401 when invalid credentials are provided', async () => {
    await request(app)
      .post('/api/login')
      .send({
        email: 'valid_email@email.com',
        password: 'hashed_password'
      })
      .expect(401)
  })
})
