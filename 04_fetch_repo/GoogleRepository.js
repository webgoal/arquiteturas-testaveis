import { Fetcher } from './Fetcher'

export class GoogleRepository {
  static baseUrl = 'https://www.google.com.br'

  constructor(fetchFunc) {
    this.fetcher = new Fetcher(GoogleRepository.baseUrl, fetchFunc)
  }

  search(term) {
    this.fetcher.getJson('/search', { q: term })
  }

}
