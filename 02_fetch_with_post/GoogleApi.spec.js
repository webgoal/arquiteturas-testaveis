import { GoogleApi } from './GoogleApi'

let fetchMock = null
let googleApi = null

const requestedUrl = () => fetchMock.mock.calls[0][0]
const requestedOptions = () => fetchMock.mock.calls[0][1]

describe('GoogleApi', () => {
  beforeEach(() => {
    fetchMock = jest.fn()
    googleApi = new GoogleApi(fetchMock)
  })

  it('getJson knows the base url', () => {
    googleApi.getJson('/')

    expect(requestedUrl()).toEqual('https://www.google.com.br/')
  })

  it('getJson sends GET method', () => {
    googleApi.getJson('/')

    expect(requestedOptions().method).toEqual('GET')
  })

  it('getJson sends POST method', () => {
    googleApi.getJson('/')

    expect(requestedOptions().method).toEqual('GET')
  })
})