import { Fetcher } from './Fetcher'

export class GoogleRepository {
  static baseUrl = 'https://www.google.com.br'

  constructor(fetchFunc) {
    this.fetcher = new Fetcher(GoogleRepository.baseUrl, fetchFunc)
  }

  setAuthToken(authTokenParam) {
    this.fetcher.setHeader('Authorization', authTokenParam)
  }

  search(term) {
    this.fetcher.getJson('/search', { q: term })
  }
}
