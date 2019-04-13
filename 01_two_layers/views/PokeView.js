import React from 'react'
import { View, Button, FlatList, Text } from 'react-native'
import PokeItem from './PokeItem'

// dependência importada diretamente, segue o fluxo de controle
import PokeRepo from '../repositories/PokeRepo'

export default class PokeView extends React.Component {
  state = {
    pokemons: []
  }
  
  loadPokes = async () => {
    const pokeRepo = new PokeRepo() // instância direta da classe da camada de Repositórios
    const pokemons = await pokeRepo.pokemons()
    this.setState({ pokemons })
  }

  render() {
    return (
      <View>
        <Button title="Carregar" onPress={this.loadPokes} />
        <FlatList
          data={this.state.pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => <PokeItem>{item.name}</PokeItem>}
        />
      </View>
    )
  }
}
