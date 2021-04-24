import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../../styles/project-details-styles.module.css';

export default function rezzshop() {
  return (
    <>
    <NavBar />
    <div className={styles.mainContainer} >
        
        <div className={styles.headerContainer}>
          <h5 className={styles.sectionHeaderText} >Project Name:</h5> 
          <p className={styles.text} >RezzShop</p>

          <h5 className={styles.sectionHeaderText} >Project Description:</h5> 
          <p className={styles.text}>RezzShop is a tailored web application designed to provide low cost & modern e-commerce web services for small bars & restaurants.</p>
                <div className="col">
                  <h5 className={styles.sectionHeaderText}>Technologies Used:</h5>
                  <ul className={styles.text}>
                    <li>Node.js</li>
                    <li>Expres.js</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>MongoDB</li>
                    <li>PayPal API</li>
                  </ul>
                </div>

          <h5 className={styles.sectionHeaderText}>Project Key Notes:</h5>
          
          <h6 style={{marginLeft: '1.5rem', marginTop: '1rem'}} >Node.js & Express.js RESTful API</h6>
          <ul className={styles.text} >
                <li>Used Node.js + Express.js, along with a series of middleware functions, to create & expose a RESTful API.
                </li>
                <li>Integrated the PayPal API to process customer payments.
                </li>
          </ul>

          <br />

          <h6 style={{marginLeft: '1.5rem'}}>React + Redux</h6>
          <ul className={styles.text}>
            <li>
            Designed an Admin platform and leveraged the Redux library to provide proprietors with a customized dashboard GUI of customer sales data.
            </li>
            <li>
            Constructed a fast and moden React UI, allowing users to shop, rate, and review restaurant & bar products.
            </li>
          </ul>
        </div>

        <div className={styles.linkRow}>
          <a target="_blank" href="https://github.com/Djcarrillo6/eCommerce"><button style={{marginRight: '2rem', backgroundColor: 'rgb(10, 2, 56)', color: 'white'}}  className="btn">GitHub Repository</button></a>
          <a target="_blank" href="https://rezzshopapp.herokuapp.com/"><button
          style={{backgroundColor: 'rgb(9, 114, 12)', color: 'white'}}  className="btn" >Demo Project</button></a>
        </div>

      </div>

      <Footer />

    
    </>
  )
}