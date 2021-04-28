 import styles from '../../styles/NavBar.module.css'

 const NavBar = () => {


  return (
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1><a href="/">DJ's Portfolio</a></h1>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/Profile">Profile</a></li>
            <li><a href="/#projectGallery">Projects</a></li>
            <li><a href="/#contact-form">Contact</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </div>
      </nav>
  )
}

export default NavBar;