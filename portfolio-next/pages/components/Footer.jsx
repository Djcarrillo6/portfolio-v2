import styles from '../../styles/Footer.module.css';
import { 
  FaLinkedin,
  FaTwitter,
  FaEnvelopeOpenText
}  from 'react-icons/fa'
import { VscGithub } from "react-icons/vsc";
import { IconContext } from "react-icons"


export default function Footer() {
  return (
    <>
    <div className={styles.footerContainer} >

    <div className={styles.footerWrapper} >
      
      <div className={styles.footerHeader}>
          <h4 class={styles.footerTextStyles} >David Anthony Carrillo Jr.</h4>
          <div className={styles.iconContainer}>
            <IconContext.Provider value={{ size: '45px', color: 'white' }} >
              <FaEnvelopeOpenText className={styles.mr} />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '45px', color: 'darkblue' }} >
              <FaLinkedin className={styles.mr} />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'rgb(29 161 242)', size: '45px' }} >
              <FaTwitter className={styles.mr} />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '45px', color: 'black' }} >
              <VscGithub className={styles.mr} />
            </IconContext.Provider>
          </div>
      </div>

    </div>

    </div>
    </>
  )
}