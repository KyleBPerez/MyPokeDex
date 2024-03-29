const URL = 'https://pokeapi.co/api/v2';

export async function fetchFirstPokemon() {
  try {
    const response = await fetch(`${URL}/pokemon/1`,
      {
        method: 'GET'
      });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error, 'error happed in fetchAllPokemon')
  }
}


export async function fetchNextOrPreviousPokemon(newId) {
  if (localStorage.getItem(newId)) {
    return JSON.parse(localStorage.getItem(newId));
  }
  try {
    const response = await fetch(`${URL}/pokemon/${newId}`,
      {
        method: 'GET',
      })
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error, `error in fetchNextOrPreviousPokemeon`)
  }
}

export async function fetchSpecificPokemon(pokemonName) {
  try {
    const response = await fetch(`${URL}/pokemon/${pokemonName}`)
    const data = await response.json();
    return data
  } catch (error) {
    console.error(`error in fetchSpecificPokemon`)
  }
}
