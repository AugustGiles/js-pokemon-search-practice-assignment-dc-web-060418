document.addEventListener("DOMContentLoaded", function() {

  const pokemonList = new PokemonList()
  const searchBar = document.getElementById("pokemon-search-input")
  const pokemonContainer = document.getElementById("pokemon-container")


  pokemonContainer.innerHTML = pokemonList.render()
  setFlipPictureClickListener()

  searchBar.addEventListener("keydown", function(e) {
    window.setTimeout(function() {
      pokemonList.filter(searchBar.value)
      pokemonContainer.innerHTML = pokemonList.render()
      setFlipPictureClickListener()
    }, 1)
  })

  function setFlipPictureClickListener() {
    const pokemon = document.querySelectorAll(".flip-image")
    pokemon.forEach(function(e) {
      e.addEventListener("click", function() {
        const thisPokemon = this.dataset.pokename
        const foundPokemon = pokemonList.pokemon.find(function(e) {
          return (e.name === thisPokemon)
        })
        let currentPicture = this.parentNode.querySelector("img")
        if (foundPokemon.flipped) {
          foundPokemon.flipped = false
          currentPicture.src = foundPokemon.frontSprite
        } else {
          foundPokemon.flipped = true
          currentPicture.src = foundPokemon.backSprite
        }
      })
    })
  }
  

})
