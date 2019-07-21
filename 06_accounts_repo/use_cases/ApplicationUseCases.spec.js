import { MemoryStorage } from './MemoryStorage'
import { ApplicationUseCases } from './ApplicationUseCases'

const fakeToken = 'abc123'
const fakeCities = ['Poços', 'Caldas']
let storeFake = null
let googleAccountsRepositoryFake = null
let googleRepositoryFake = null
let applicationUseCases = null

describe('ApplicationUseCases', () => {
  beforeEach(() => {
    storeFake = new MemoryStorage()
    googleAccountsRepositoryFake = { // objeto mocado, jest.fn moca apenas função
      authenticate: () => fakeToken // método que retorna sempre um valor fixo
    }
    googleRepositoryFake = { // outro objeto mocado
      setAuthToken: jest.fn(), // método mocado
      search: () => fakeCities // método que retorna sempre um valor fixo
    }
    applicationUseCases = new ApplicationUseCases(storeFake, googleAccountsRepositoryFake, googleRepositoryFake)
  })

  it('starts without a token', async () => {
    expect(await storeFake.getItem('currentAuthToken')).toEqual(undefined)
  })

  it('authenticate() requests and store the token', async () => {
    const user = 'altz'
    const pass = 'pa$$wd'
    applicationUseCases.authenticate(user, pass)

    expect(await storeFake.getItem('currentAuthToken')).toEqual(fakeToken)
  })

  it('starts without search results', () => {
    expect(applicationUseCases.searchResults).toEqual(null)
  })

  it('refreshSearchResultsFor updates the search results', async () => {
    // coloca o token direto no store, poderia chamar o método de autenticação aqui
    // mas neste teste o objetivo não é testar o authenticate(), mas o searchFor()
    storeFake.setItem('currentAuthToken', fakeToken)

    await applicationUseCases.refreshSearchResultsFor('cidades')

    expect(applicationUseCases.searchResults).toEqual(fakeCities)
  })

  it('refreshSearchResultsFor uses stored auth token', async () => {
    storeFake.setItem('currentAuthToken', fakeToken)

    await applicationUseCases.refreshSearchResultsFor('cidades')

    // aqui basta saber se o setAuthToken foi chamado, o teste no 
    // GoogleRepository para este método que garante que o header
    // será enviado
    expect(googleRepositoryFake.setAuthToken).toBeCalledWith(fakeToken)
  })
})
