const { MongoClient } = require('mongodb')
module.exports = {
  async connect (url, dbName) {
    this.url = url
    this.dbName = dbName
    this.client = await MongoClient.connect(url, {
      userNewUrlParser: true,
      userUnifiedTopology: true
    })
    this.db = this.client.db(dbName)
  },

  async disconnect () {
    await this.client.close()
    this.client = null
    this.db = null
  },

  async getCollection (name) {
    if (!this.client || !this.client.isConnected()) {
      await this.connect(this.url, this.dbName)
    }
    return this.db.collection(name)
  }
}
