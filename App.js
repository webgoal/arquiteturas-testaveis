import React from 'react';
import { StyleSheet, View } from 'react-native';
import PokeView from './src/PokeView'
import PokeRepo from './src/PokeRepo'

const pokeRepo = new PokeRepo()

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PokeView pokeRepo={pokeRepo} />
      </View>
    )
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
