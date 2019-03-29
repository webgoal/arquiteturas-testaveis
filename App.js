import React from 'react';
import { StyleSheet, View } from 'react-native';
import PokeView from './src/PokeView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PokeView />
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
