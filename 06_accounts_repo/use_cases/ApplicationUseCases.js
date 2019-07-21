let store = null
let googleAccountsRepository = null
let googleRepository = null

export class ApplicationUseCases {
  searchResults = null

  constructor(storeParam, googleAccountsRepositoryParam, googleRepositoryParam) {
    store = storeParam
    googleAccountsRepository = googleAccountsRepositoryParam
    googleRepository = googleRepositoryParam
  }

  authenticate(user, pass) {
    const authToken = googleAccountsRepository.authenticate(user, pass)
    store.setItem('currentAuthToken', authToken)
  }

  refreshSearchResultsFor = async (term) => {
    googleRepository.setAuthToken(await store.getItem('currentAuthToken'))
    this.searchResults = googleRepository.search(term)
  }
}