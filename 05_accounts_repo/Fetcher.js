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
    return this.requestJson(`${path}${queryString}`, 'GET')
  }

  postJson(path) {
    return this.requestJson(path, 'POST')
  }

  requestJson(path, method) {
    return this.fetchFunc(`${this.baseUrl}${path}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
      }
    })
  }

}
