import { 
  FaLinkedin,
  FaTwitter
}  from 'react-icons/fa'
import { VscGithub } from "react-icons/vsc";
import { IconContext } from "react-icons"
import styles from '../styles/Footer.module.css';


export default function Footer() {
  return (
    <>
    <div className={styles.footerContainer} >

    <div className={styles.footerWrapper} >
      
      <div className={styles.footerHeader}>
          <h4 className={styles.footerTextStyles} >David Anthony Carrillo Jr.</h4>
          <div className={styles.iconContainer}>  
            <IconContext.Provider value={{ size: '30px', color: 'darkblue' }} >
              <a href="https://www.linkedin.com/in/davidcarrillojr/">
                <FaLinkedin className={styles.mr} />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'rgb(29 161 242)', size: '30px' }} >
              <a href="https://twitter.com/Djcarrillo6">
                <FaTwitter className={styles.mr} />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '30px', color: 'black' }} >
              <a href="https://github.com/Djcarrillo6">
                <VscGithub className={styles.mr} />
              </a>
            </IconContext.Provider>
          </div>
      </div>

    </div>

    </div>
    </>
  )
}