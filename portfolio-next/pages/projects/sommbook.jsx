import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import NextLink from 'next/link';
import styles from '../../styles/project-details-styles.module.css';


export default function sommbook() {
  return (
    <>
    <NavBar />

      <div className={styles.mainContainer} >
        
        <div className={styles.headerContainer}>
          <h5 className={styles.sectionHeaderText} >Project Name:</h5> 
          <p className={styles.text} >Somm-J</p>

          <h5 className={styles.sectionHeaderText} >Project Description:</h5> 
          <p className={styles.text} >Somm-J is an interactive journal, designed for wine lovers to begin cataloging all of their wine-tasting notes into one single source.  Users can rate, score, review, organize, & rank all of the different wines they consume.</p>
                <div className="col">
                  <h5 className={styles.sectionHeaderText}>Technologies Used:</h5>
                  <ul className={styles.text}>
                    <li>React.js</li>
                    <li>Java Spring Boot</li>
                    <li>MySQL</li>
                    <li>Material UI</li>
                  </ul>
                </div>

          <h5 className={styles.sectionHeaderText}>Project Key Notes:</h5>
          
          <h6 style={{marginLeft: '1.5rem', marginTop: '1rem'}} >MySQL for Data</h6>
          <ul className={styles.bulletPoints} >
                <li>A SQL indexed database is used on the backend, and the API interfaces with it, in addition to the React.js front-end. 
                </li>
                <li>Exposed a Java Spring Boot RESTful API, which features server-side pagination, sorting, and more custom MySQL query tools.
                </li>
          </ul>
        </div>

        <div className={styles.linkRow}>
          <NextLink href="https://github.com/Djcarrillo6/SommBook_v1" passHref><a target="_blank"><button style={{marginRight: '2rem', backgroundColor: 'rgb(10, 2, 56)', color: 'white'}}  className="btn">GitHub Repository</button></a></NextLink>
        </div>

      </div>

      <Footer />
    </>
  )
}