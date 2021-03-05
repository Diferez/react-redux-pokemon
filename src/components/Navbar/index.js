
import styles from './Navbar.module.css';
import {connect} from 'react-redux'
import {updateSearch} from '../../actions/searchActions';

const Navbar = (props) =>{
    const handlerChange = (e) => {
        props.updateSearch(e.target.value);
    }
    return(
    <nav className={styles.navBar}>
        <span>
            <a href='/' className={styles.title}>PokéApp</a>
        </span>
        <span className={styles.navContainer}>
            <a href='pokemons' className={styles.navLink}>Pokemon</a>
            <a href='items' className={styles.navLink}>Items</a>
        </span>
        <span>
            <input type='text' placeholder='Search' className={styles.navSearch} onChange={handlerChange}></input>
        </span>
    </nav>);
    
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        updateSearch: (search) => dispatch(updateSearch(search))
    };
}


export default connect(mapStateToProps,
                       mapDispatchToProps)
                       (Navbar);