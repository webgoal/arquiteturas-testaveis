import { Fetcher } from './Fetcher'

export class GoogleAccountsRepository {
  static baseUrl = 'https://accounts.google.com.br'

  constructor(fetchFunc) {
    this.fetcher = new Fetcher(GoogleAccountsRepository.baseUrl, fetchFunc)
  }

  authenticate(user, pass) {
    return this.fetcher.postJson('/auth', { user, pass })
  }

}
