import { GoogleApi } from './GoogleApi'

let fetchMock = null
let googleApi = null

const requestedUrl = () => fetchMock.mock.calls[0][0]
const requestedOptions = () => fetchMock.mock.calls[0][1]
const requestedHeader = (headerName) => fetchMock.mock.calls[0][1]['headers'][headerName]

describe('GoogleApi', () => {
  beforeEach(() => {
    fetchMock = jest.fn()
    googleApi = new GoogleApi(fetchMock)
  })

  it('getJson knows the base url', () => {
    googleApi.getJson('/')

    expect(requestedUrl()).toEqual('https://www.google.com.br/')
  })

  it('requestJson accepts application/json', () => {
    googleApi.requestJson('/')

    expect(requestedHeader('Accept')).toEqual('application/json')
  })

  it('getJson sends GET method', () => {
    googleApi.getJson('/')

    expect(requestedOptions().method).toEqual('GET')
  })

  it('postJson sends POST method', () => {
    googleApi.postJson('/')

    expect(requestedOptions().method).toEqual('POST')
  })
})