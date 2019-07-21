import { GoogleAccountsRepository } from './GoogleAccountsRepository'

let fetchMock = null
let googleAccountsRepository = null

const requestedUrl = () => fetchMock.mock.calls[0][0]
const requestedOptions = () => fetchMock.mock.calls[0][1]
const requestedHeader = (headerName) => fetchMock.mock.calls[0][1]['headers'][headerName]

describe('GoogleAccountsRepository', () => {
  beforeEach(() => {
    fetchMock = jest.fn()
    googleAccountsRepository = new GoogleAccountsRepository(fetchMock)
  })

  it('authenticate() returns the auth token', () => {
    const fakeToken = '4321'
    fetchMock.mockReturnValue(fakeToken)

    const user = 'altz'
    const pass = 'pa$$wd'
    const authToken = googleAccountsRepository.authenticate(user, pass)

    expect(requestedUrl()).toEqual('https://accounts.google.com.br/auth')
    expect(authToken).toEqual(fakeToken)
  })

})