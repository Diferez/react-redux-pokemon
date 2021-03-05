
import './App.css';
import Navbar from './components/Navbar'
import PokeList from './components/PokeList'
import PokeDetails from './components/PokeDetails'
import PokeCompare from './components/PokeCompare'
import { Provider } from 'react-redux'

import store from './store'
function App() {
  return (
    <Provider store={store} >
    <div>
      <Navbar/>
      <PokeList/>
      <PokeDetails/>
      <PokeCompare/>
    </div>
    </Provider>
  );
}

export default App;
