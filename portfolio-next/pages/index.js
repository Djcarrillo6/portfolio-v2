import React, { useEffect } from "react";

import Head from 'next/head'
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css'

export default function Home() {
 

  return (
    <div className={styles.container}>
        < NavBar />

        <div className={styles.animatedGradientContainer}>
          <p className={styles.text} >Hi I'm DJ. I design & build web and mobile apps.
          </p>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
        </div>

        <div className={styles.animatedGradientContainer}>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>

        <p className={styles.text} >Software Engineer. Mixologist. Micro-Economist.</p>
        </div>

        <div className={styles.animatedGradientContainer}>

        <p className={styles.text} >"To improve is to change; to be perfect is to change often.    --W.Churchill 1944"</p>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
        </div>


        <div className={styles.animatedGradientContainer}>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
        </div>

        <p className={styles.projectsHeader} >Projects</p>
        <div className={styles.animatedGradientContainer}>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.circle2} ></div>
        </div>
    </div>
  )
}
