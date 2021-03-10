import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
export const filter = createAction('pokeApp/search');
const getPokemons = (page) =>{
  let off = page * 20;
  let lim = 20;
  let pokemons = fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + off + '&limit=' + lim)
                 .then(response => response.json());
  
  
  return pokemons;
};

export const fetchPokemons = createAsyncThunk(
  'pokeapp/pokemons',
  async (page, thunkAPI) => {
    const response = await getPokemons(page);
    return response.results;
  }
);
