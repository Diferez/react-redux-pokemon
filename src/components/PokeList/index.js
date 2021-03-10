import React, { useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux'
import styles from './PokeList.module.css';
import pokeball from './simple_pokeball.gif';
import useElementOnScreen from './useElementOnScreen';
import Pokemon from './Pokemon';
import {fetchPokemons} from '../../actions/pokemonActions';



const PokeList = (props) =>{
  const pokemons = props.pokemons;
  const [page, setPage] = useState(0);
  const dispatch = useDispatch()
  const [ containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  useEffect(()=>{
    if(isVisible && props.search.search === ''){  
      dispatch(fetchPokemons(page))
      setPage(page+1);
    }

  }, [isVisible]);
 
  const filter= (pokemon) =>{
    if(props.search.search === '' || pokemon.name.includes(props.search.search)){
      return(
        <Pokemon key={pokemon.name} pokeUrl = {pokemon.url} number={pokemons.indexOf(pokemon)+1} name={pokemon.name} display={true}/>
      );
    }else{
      return(
        <Pokemon key={pokemon.name} pokeUrl = {pokemon.url} number={pokemons.indexOf(pokemon)+1} name={pokemon.name} display={false}/>
      );
    }
  }



  return(
    <div className={styles.pokemonList}>
      {Object.keys(props.compare.first).length !== 0 ?
      <span className={styles.selected}>
        {props.compare.first.name.toUpperCase()}
      </span>
      :
      null}
      {pokemons ? pokemons.map(filter) : null}
      <div ref={containerRef}>
        <img className={styles.pokemonImg} src={pokeball} alt='Loading...'></img>
      </div>
      
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    compare: state.compare,
    pokemons: state.pokemons,
    selected: state.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}


export default connect(mapStateToProps,
             mapDispatchToProps)
             (PokeList);