
import './App.css';
import Navbar from './components/Navbar';
import PokeList from './components/PokeList';
import PokeDetails from './components/PokeDetails';
import PokeCompare from './components/PokeCompare';
import Welcome from './components/Welcome';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';



function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <Navbar/>
        <Route path='/' exact>
            <Welcome></Welcome>
        </Route>
        <Route path='/pokemons' exact>
          <PokeList/>
          <PokeDetails/>
          <PokeCompare/>
        </Route>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
