class PokemonList {

  constructor() {
    this.allPokemon = this.parsePokemon()
    this.pokemon = this.allPokemon
  }

  filter(query) {
    this.pokemon = this.allPokemon.filter(function(el) {
      return el.name.includes(query.toLowerCase())
    })
  }

  render() {
    let returnString = "<div>"
    this.pokemon.forEach(function(el) {
      returnString += el.render()
    })
    if (this.pokemon.length === 0) {
      returnString += "<center>There are no Pokémon here</center>"
    }
    returnString += "</div>"



    return returnString
  }

  parsePokemon() {
    return data.pokemons.map( function (el) {
      return new Pokemon(el.name, el.sprites.front, el.sprites.back)
    })
  }


}
