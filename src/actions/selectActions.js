export const UPDATE_POKEMON = 'UPDATE_POKEMON';
export const CLEAR_POKEMON = 'CLEAR_POKEMON';

export const updatePokemon = (pokemon) => {
    return { 
        type: UPDATE_POKEMON,
        payload: pokemon
    }
};

export const clearPokemon = () =>{
    return{
        type: CLEAR_POKEMON
    }
};