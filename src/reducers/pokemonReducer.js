import {fetchPokemons} from '../actions/pokemonActions';
import {createReducer} from '@reduxjs/toolkit'

const pokemonReducer = createReducer([], (builder)=>{
  builder
    .addCase(fetchPokemons.fulfilled, (state, action) => {
      return state = state.concat(action.payload);
    })
})

export default pokemonReducer;