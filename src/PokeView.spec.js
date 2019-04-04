import React from 'react'
import renderer from 'react-test-renderer'

import PokeView from './PokeView'

describe('PokeView', () => {
  it('it renders', () => {
    const component = renderer.create(<PokeView pokeRepo={{ pokemons: () => [] }} />)
    expect(component).toBeTruthy()
  })
})