import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon'

export default class App extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount = async () => {
    const pokemonsRequest = await fetch(pokedexUrl)
    const pokemonsResult = await pokemonsRequest.json()
    const pokemons = pokemonsResult.results
    this.setState({ pokemons })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
