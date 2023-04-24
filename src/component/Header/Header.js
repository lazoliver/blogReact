import { NavLink } from "react-router-dom";

// components
import NavBar from "../NavBar/NavBar";

// css
import styles from "./Header.module.css";

const Header = () => {
    return <header className={styles.header}>
        <div className="container">
            <NavLink to="/">
                <h1>
                    MINIblog
                </h1>
            </NavLink>
            <NavBar/>
        </div>
    </header>
}
export default Header;