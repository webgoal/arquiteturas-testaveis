
const expectDoublesEqual = (v, e) => {
  // request
  expect(v * 2).toEqual(e)
}

describe('PokeList', () => {
  it('sums', () => {
    expectDoublesEqual(1, 2)
  })

  describe('Redefined', () => {
    it('sums 2', () => {
      expectDoublesEqual(2, 4)
    })
  })
})