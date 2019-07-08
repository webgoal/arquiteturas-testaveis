export class GoogleApi {
  static baseUrl = 'https://www.google.com.br'

  constructor(fetchFunc) {
    this.fetchFunc = fetchFunc
  }

  getJson(path) {
    this.requestJson(path, 'GET')
  }

  postJson(path) {
    this.requestJson(path, 'POST')
  }

  requestJson(path, method) {
    this.fetchFunc(`${GoogleApi.baseUrl}${path}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
      }
    })
  }

}
