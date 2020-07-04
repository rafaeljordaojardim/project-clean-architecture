module.exports = {
  token: 'anu_token',
  sign (id, secret) {
    return this.token
  }
}
