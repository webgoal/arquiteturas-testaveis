export class GoogleApi {
  static baseUrl = 'https://www.google.com.br'

  constructor(fetchFunc) {
    this.fetchFunc = fetchFunc
  }

  getJson(path) {
    this.fetchFunc(`${GoogleApi.baseUrl}${path}`, {
      method: 'GET',
    })
  }

}
