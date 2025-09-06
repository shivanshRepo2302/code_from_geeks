import styles from '../assets/UI/CatagoriesHeader.module.css';
import {NavLink} from 'react-router-dom';
const CatagoriesHeader = (props) => {
    return (
        <div className={styles.CatagoriesHeader}>            
                
                <NavLink to="/Technology" className={styles.Catagory}>Technology</NavLink>
                <NavLink to="/Sports" className={styles.Catagory}>Sports</NavLink>
                <NavLink to="/Health & Beauty" className={styles.Catagory}>Health & beauty</NavLink>
                <NavLink to="/Fashion" className={styles.Catagory}>Fashion</NavLink>
                <NavLink to="/Movie,Music & Video Games" className={styles.Catagory}>Movie,Music & Video Games</NavLink>
                <NavLink to="/Book" className={styles.Catagory}>Books</NavLink>
            </div>
    );
}

export default CatagoriesHeader;