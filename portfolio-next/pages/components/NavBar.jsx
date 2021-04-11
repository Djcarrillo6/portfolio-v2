 import styles from '../../styles/NavBar.module.css'

 const NavBar = () => {


  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className="|"><a href="/">DJ's Portfolio</a></h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/#projectGallery">Projects</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Blog</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;