function catchPokemon(pokemonId) {
    const pokemon = document.getElementById(pokemonId);
    const catchMessage = document.getElementById('catchMessage');
    
    pokemon.style.animation = 'catchPokemonAnimation 1s forwards'; 
    
    setTimeout(() => {
        pokemon.innerHTML = '<img src="../images/pokeballs.png" alt="Caught!">';
        
        pokemon.style.animation = 'ballPopOut 0.5s forwards';
        
        catchMessage.textContent = `You caught ${pokemonId.charAt(0).toUpperCase() + pokemonId.slice(1)}!`;
        catchMessage.style.display = 'block';
        
        setTimeout(() => {
            const pokemonImage = getPokemonImage(pokemonId);
            pokemon.innerHTML = `<img src="${pokemonImage}" alt="${pokemonId.charAt(0).toUpperCase() + pokemonId.slice(1)}">`;
            catchMessage.style.display = 'none';
        }, 3000);
    }, 1000); 
}

function getPokemonImage(pokemonId) {
    const images = {
        pokemon1: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
        pokemon2: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
        pokemon3: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
    };
    return images[pokemonId];
}
