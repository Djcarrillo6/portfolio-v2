import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../../styles/project-details-styles.module.css';

const  dj6notebook = () => {
  return (
    <>
    <NavBar />

      <div className={styles.mainContainer} >
        
        <div className={styles.headerContainer}>
          <h5 className={styles.sectionHeaderText} >Project Name:</h5> 
          <p className={styles.text} >dj6-jsnote</p>

          <h5 className={styles.sectionHeaderText} >Project Description:</h5> 
          <p className={styles.text} >I created this web application as an NPM module, which is publically avaiable for use <a style={{textDecoration: 'underline', color: 'purple'}}  href="https://www.npmjs.com/packages/jsnote-dj6">here.</a> This NPM module is a CLI to launch an interactive development environment inside a user's browser, for writing, executing, and documenting code.</p>

                <div className="col" style={{marginTop: '.5rem'}} >
                  <h5 className={styles.sectionHeaderText}>Technologies Used:</h5>
                  <ul className={styles.text}>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Redux</li>
                    <li>NPM Registry</li>
                  </ul>
                </div>

          <h5 className={styles.sectionHeaderText}>Project Key Notes:</h5>
          
          <h6 style={{marginLeft: '1.5rem', marginTop: '1rem'}} >Hijacking ESBuild</h6>
          <ul className={styles.text} >
                <li>In order to safely execute a user's provided JavaScript code inside their browser, I customized the traditional ESBuild process with a unqiue plugin that performs a very specific role.
                </li>
                <li>I creating a custom ESBuild plugin that intercepts the bundle request before it resolves, and replaces the path location with a third party API that holds the same modules that are currently hosted on the NPM Registry.
                </li>
                <li>A small webpack-plugin, is used to overwrite Webpack's default protocols, and load the module from UNPKG.com instead of the local drive.
                </li>
                <li>The plugin will proxy an API request from a local Node server to UNPKG.com, and subsequently load the module received from the API request, so it can be transpiled and executed in the adjacent preview window.
                </li>
          </ul>

          <br />

          <h6 style={{marginLeft: '1.5rem'}}>Caching For Performance</h6>
          <ul className={styles.text}>
            <li>
              To reduce the amount of requests made to www.unpkg.com for the NPM modules that a user wishes to use in their coding environment, a caching unqiue layer is implemented.
            </li>
            <li>
              I used the NPM library called "localForage" to create an expanded caching layer that is much larger in memory space than a traditional browser's local storage space.
            </li>
          </ul>

        </div>

        <div className={styles.linkRow}>
          <a target="_blank" href="https://github.com/Djcarrillo6/jsnotebook-dj6"><button style={{marginRight: '2rem', backgroundColor: 'rgb(10, 2, 56)', color: 'white'}}  className="btn">GitHub Repository</button></a>
          <a target="_blank" href="https://www.npmjs.com/packages/jsnote-dj6"><button
          style={{backgroundColor: 'rgb(9, 114, 12)', color: 'white'}}  className="btn" >Demo Project</button></a>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default dj6notebook;