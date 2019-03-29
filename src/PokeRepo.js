const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon'

export default class PokeRepo {
  pokemons = async () => {
    const pokemonsRequest = await fetch(pokedexUrl)
    const pokemonsResult = await pokemonsRequest.json()
    return pokemonsResult.results
  }
}