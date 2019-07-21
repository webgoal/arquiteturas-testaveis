export class Fetcher {
  headers = {
    'Accept': 'application/json',
  }

  constructor(baseUrl, fetchFunc) {
    this.baseUrl = baseUrl
    this.fetchFunc = fetchFunc
  }

  setHeader(headerName, headerValue) {
    this.headers = {
      ...this.headers,
      [headerName]: headerValue
    }
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
      headers: this.headers
    })
  }

}
