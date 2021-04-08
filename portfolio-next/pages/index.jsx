import Head from 'next/head'
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css'

import { FontAwesome } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"

export default function Home() {
 
  return (
    <>
    <div className={styles.container}>
        < NavBar />

        <div className={styles.animatedGradientContainer}>
          <p className={styles.text} >Hi I'm DJ. I design & build web and mobile apps.
          </p>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>

        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>

        <p className={styles.text} >Software Engineer. Micro-Economist. Mixologist.</p>
        </div>

        <div className={styles.animatedGradientContainer}>

        <p className={styles.text} >"To improve is to change; to be perfect is to change often.  --W.Churchill 1944"</p>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>


        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>

        <p className={styles.sectionHeader} >Project Gallery</p>
        <ProjectList />


        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>

        <p className={styles.sectionHeader} >Technical Skill Set Gallery</p>

        <div className={styles.skillGallery}>
        <IconContext.Provider >
          <div>

          </div>
        </IconContext.Provider>

        </div>

        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>

        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>

        <p className={styles.sectionHeader} >Connect</p>        

        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>

        <div className={styles.animatedGradientContainer}>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square2} ></div>
        </div>
    </div>

    <Footer />

    </>
  )
}
