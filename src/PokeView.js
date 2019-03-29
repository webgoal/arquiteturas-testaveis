import React from 'react';
import { Text, FlatList } from 'react-native';
import PokeRepo from './PokeRepo'

export default class PokeView extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount = async () => {
    const pokeRepo = new PokeRepo()
    const pokemons = await pokeRepo.pokemons()
    this.setState({ pokemons })
  }

  render() {
    return (
      <FlatList
        data={this.state.pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    );
  }
}
