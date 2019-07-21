import { GoogleRepository } from './GoogleRepository'

const fakeToken = 'abc123'

let fetchMock = null
let googleRepository = null

const requestedUrl = () => fetchMock.mock.calls[0][0]
const requestedOptions = () => fetchMock.mock.calls[0][1]
const requestedHeader = (headerName) => fetchMock.mock.calls[0][1]['headers'][headerName]

describe('GoogleRepository', () => {
  beforeEach(() => {
    fetchMock = jest.fn()
    googleRepository = new GoogleRepository(fetchMock)
  })

  it('search knows the right path and params', () => {
    const searchTerm = 'casa'
    googleRepository.search(searchTerm)

    expect(requestedUrl()).toEqual(`${GoogleRepository.baseUrl}/search?q=${searchTerm}`)
  })
  
  it('search after setAuthToken sends the header', () => {
    googleRepository.setAuthToken(fakeToken)
    googleRepository.search('something')

    expect(requestedHeader('Authorization')).toEqual(fakeToken)
  })
})