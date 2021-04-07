import Head from 'next/head'
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import styles from '../styles/Home.module.css'

export default function Home() {
 
  return (
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

        <p className={styles.projectsHeader} >Project Gallery</p>
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
  )
}
