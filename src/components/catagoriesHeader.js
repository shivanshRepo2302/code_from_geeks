import styles from '../assets/UI/CatagoriesHeader.module.css';
import {NavLink} from 'react-router-dom';
const CatagoriesHeader = (props) => {
    return (
        <div className={styles.CatagoriesHeader}>            
                <NavLink to="/Trending" className={styles.Catagory}>Trending</NavLink>
                <NavLink to="/Technology" className={styles.Catagory}>Technology</NavLink>
                <NavLink to="/Sports" className={styles.Catagory}>Sports</NavLink>
                <NavLink to="/Entertainment" className={styles.Catagory}>Entertainment</NavLink>
                <NavLink to="/Health" className={styles.Catagory}>Health</NavLink>
                <NavLink to="/Business" className={styles.Catagory}>Business</NavLink>
                <NavLink to="/Game" className={styles.Catagory}>Game</NavLink>
            </div>
    );
}

export default CatagoriesHeader;