import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'react-native'

import PokeView from './PokeView'
import PokeItem from './PokeItem'

// README: NOTA02
jest.mock('ScrollView', () => require.requireMock('ScrollViewMock'))

describe('PokeView', () => {
  it('renders', () => {
    const testRenderer = renderer.create(<PokeView pokeRepo={{ pokemons: () => [] }} />)
    expect(testRenderer).toBeTruthy()
  })

  it('initializes empty', () => {
    const testRenderer = renderer.create(<PokeView pokeRepo={{ pokemons: () => [] }} />)
    const testInstance = testRenderer.root
    expect(testInstance.instance.state.pokemons.length).toEqual(0)
    expect(testInstance.findAllByType(PokeItem).length).toEqual(0)
  })

  it('loads pokes on click', async () => {
    const testRenderer = renderer.create(<PokeView pokeRepo={{ pokemons: () => [] }} />)
    const testInstance = testRenderer.root
    await testInstance.findByType(Button).props.onPress()
    expect(testInstance.instance.state.pokemons.length).toEqual(20)
    expect(testInstance.findAllByType(PokeItem).length).toEqual(10) // FlatList renders only first 10 items
  })

})