import Link from 'next/link';
import styles from '../../styles/NavBar.module.css'

 const NavBar = () => {


  return (
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1><a href="/">DJ's Portfolio</a></h1>
          <ul>
            <li><Link href="/#home"><a>Home</a></Link></li>
            <li><Link href="/#projects"><a>Projects</a></Link></li>
            <li><Link href="/#contact-form"><a>Contact</a></Link></li>
            <li><Link href="/"><a>Blog</a></Link></li>
          </ul>
        </div>
      </nav>
  )
}

export default NavBar;