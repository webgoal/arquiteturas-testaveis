import { Fetcher } from './Fetcher'

let fetchMock = null
let fetcher = null

const baseUrl = 'https://www.google.com.br'
const requestedUrl = () => fetchMock.mock.calls[0][0]
const requestedOptions = () => fetchMock.mock.calls[0][1]
const requestedHeader = (headerName) => fetchMock.mock.calls[0][1]['headers'][headerName]

describe('Fetcher', () => {
  beforeEach(() => {
    fetchMock = jest.fn()
    fetcher = new Fetcher(baseUrl, fetchMock)
  })

  it('getJson knows the base url', () => {
    const searchPath = '/search'
    fetcher.getJson(searchPath)

    expect(requestedUrl().startsWith(baseUrl)).toBeTruthy()
    expect(requestedUrl().endsWith(searchPath)).toBeTruthy()
  })

  it('requestJson accepts application/json', () => {
    fetcher.requestJson('/')

    expect(requestedHeader('Accept')).toEqual('application/json')
  })

  it('getJson sends GET method', () => {
    fetcher.getJson('/')

    expect(requestedOptions().method).toEqual('GET')
  })

  it('getJson concatenates query params', () => {
    fetcher.getJson('/path', { a: 'b', c: 'd'})

    expect(requestedUrl()).toEqual(`${baseUrl}/path?a=b&c=d`)
  })

  it('postJson sends POST method', () => {
    fetcher.postJson('/')

    expect(requestedOptions().method).toEqual('POST')
  })

  it('setHeader redefines header values', () => {
    const newHeaderValue = 'text/html'
    fetcher.setHeader('Accept', newHeaderValue)
    fetcher.getJson('/')

    expect(requestedHeader('Accept')).toEqual(newHeaderValue)
  })

  it('setHeader defines new header values', () => {
    const newHeaderValue = 'asdf123'
    fetcher.setHeader('Authorization', newHeaderValue)
    fetcher.getJson('/')

    expect(requestedHeader('Accept')).toEqual('application/json')
    expect(requestedHeader('Authorization')).toEqual(newHeaderValue)
  })
})