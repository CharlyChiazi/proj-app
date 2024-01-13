import styles from "./Header.module.css";


function Header () {
    return(
        <>
        <header className={styles.header}>
            <span>Charly Gray</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assisteir</a>
            </nav>
        </header>
        </>
    )

}

export default Header;