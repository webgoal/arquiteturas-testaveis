import { GoogleApi } from './GoogleApi'

describe('GoogleApi', () => {
  it('getJson knows the base url', () => {
    const fetchMock = jest.fn()
    const googleApi = new GoogleApi(fetchMock)
    googleApi.getJson('/')

    const requestedUrl = fetchMock.mock.calls[0][0]
    expect(requestedUrl).toEqual('https://www.google.com.br/')
  })

  it('getJson sends GET method', () => {
    const fetchMock = jest.fn()
    const googleApi = new GoogleApi(fetchMock)
    googleApi.getJson('/')

    const requestedOptions = fetchMock.mock.calls[0][1]
    expect(requestedOptions.method).toEqual('GET')
  })
})