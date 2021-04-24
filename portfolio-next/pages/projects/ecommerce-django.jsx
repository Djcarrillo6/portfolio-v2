import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../../styles/project-details-styles.module.css';


export default function ecommerceDjango() {
  return (
    <>
    <NavBar />
    <div className={styles.mainContainer} >
        <div className={styles.headerContainer}>
          <h5 className={styles.sectionHeaderText} >Project Name:</h5> 
          <p className={styles.text} >E-Commerce Website</p>

          <h5 className={styles.sectionHeaderText} >Project Description:</h5> 
          <p className={styles.text}>For this project, I used Python & Django, to create a customizable E-Commerce website that can be molded and suited for any modern business entity seeking the benefits of  a mutifunctional e-commerce platform.</p>
                <div className="col">
                  <h5 className={styles.sectionHeaderText}>Technologies Used:</h5>
                  <ul className={styles.text}>
                    <li>Python + Django(v2.2)</li>
                    <li>jQuery</li>
                    <li>PostgreSQL</li>
                    <li>Stripe API</li>
                    <li>MailChimp</li>
                  </ul>
                </div>

          <h5 className={styles.sectionHeaderText}>Project Key Notes:</h5>
          
          <h6 style={{marginLeft: '1.5rem', marginTop: '1rem'}} >Python & Django Backend</h6>
          <ul className={styles.text} >
                <li>Constructed a Django back-end component to catalogue all sales products, and connected the store's database to a front-end user search tool, giving user quick searching ability while they shop.
                </li>
                <li>Integrated the Stripe API to process customer payments, as well as collect all correlated sales analytics.
                </li>
          </ul>

          <br />

          <h6 style={{marginLeft: '1.5rem'}}>Bootstrap & jQuery Frontend</h6>
          <ul className={styles.text}>
            <li>
            Compiled HTML/CSS/Bootstrap & jQuery, to build a modern e-commerce shopping experience.
            </li>
          </ul>
        </div>

        <div className={styles.linkRow}>
          <a target="_blank" href="https://github.com/Djcarrillo6/eCommerce_proj"><button style={{marginRight: '2rem', backgroundColor: 'rgb(10, 2, 56)', color: 'white'}}  className="btn">GitHub Repository</button></a>
          <a target="_blank" href="https://python-cfe-ecoomerce.herokuapp.com/"><button
          style={{backgroundColor: 'rgb(9, 114, 12)', color: 'white'}}  className="btn" >Demo Project</button></a>
        </div>

      </div>

      <Footer />

    
    </>
  )
}