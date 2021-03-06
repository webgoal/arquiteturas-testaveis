export class Fetcher {
  constructor(baseUrl, fetchFunc) {
    this.baseUrl = baseUrl
    this.fetchFunc = fetchFunc
  }

  getJson(path, query = {}) {
    const queryString = Object.entries(query).reduce((acc, pair) => {
      const [key, value] = pair;
      return `${acc}&${key}=${value}`;
    }, '').replace('&', '?')
    this.requestJson(`${path}${queryString}`, 'GET')
  }

  postJson(path) {
    this.requestJson(path, 'POST')
  }

  requestJson(path, method) {
    this.fetchFunc(`${this.baseUrl}${path}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
      }
    })
  }

}
