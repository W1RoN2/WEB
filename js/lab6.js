function catchPokemon(pokemonId) {
    const pokemon = document.getElementById(pokemonId);
    const catchMessage = document.getElementById('catchMessage');
    
    // Запускаємо анімацію спіймання покемона
    pokemon.style.animation = 'catchPokemonAnimation 1s forwards'; // Анімація руху покемона в покебол
    
    // Додаємо затримку, щоб покемон встиг "влетіти" в покебол
    setTimeout(() => {
        // Замінюємо покемона на покебол
        pokemon.innerHTML = '<img src="../images/pokeballs.png" alt="Caught!">';
        
        // Запускаємо анімацію появи покеболу
        pokemon.style.animation = 'ballPopOut 0.5s forwards';
        
        // Показуємо повідомлення про спіймання
        catchMessage.textContent = `You caught ${pokemonId.charAt(0).toUpperCase() + pokemonId.slice(1)}!`;
        catchMessage.style.display = 'block';
        
        // Через 3 секунди відновлюємо покемона і приховуємо повідомлення
        setTimeout(() => {
            const pokemonImage = getPokemonImage(pokemonId);
            pokemon.innerHTML = `<img src="${pokemonImage}" alt="${pokemonId.charAt(0).toUpperCase() + pokemonId.slice(1)}">`;
            catchMessage.style.display = 'none';
        }, 3000);
    }, 1000); // Чекаємо 1 секунду для анімації
}

function getPokemonImage(pokemonId) {
    const images = {
        pokemon1: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
        pokemon2: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
        pokemon3: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
    };
    return images[pokemonId];
}
