const MissingParamError = require('./missing-param-error')

module.exports = class HttpResponse {
  static badRequest (param) {
    return {
      statusCode: 400,
      body: new MissingParamError(param)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}
