
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
            <h3 className={styles.title}>PokéApp</h3>
        </span>
        <span className={styles.navContainer}>
            <span>Pokemon</span>
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