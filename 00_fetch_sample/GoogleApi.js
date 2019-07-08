export class GoogleApi {
  static baseUrl = 'https://www.google.cm.br'

  constructor(fetchFunc) {
    this.fetchFunc = fetchFunc
  }

  getJson(path) {
    this.fetchFunc(`${GoogleApi.baseUrl}${path}`, {
      method: 'GIT',
    })
  }

}
