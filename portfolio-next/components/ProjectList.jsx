import styles from '../styles/ProjectList.module.css';
import NextLink from 'next/link'
import Image from 'next/image'

const ProjectList = () => {
  return (
    <>  
  <div className={styles.galleryContainer}>
    <div className={styles.myRow}>
      <div className={styles.blackBorder}>
        <div className="card" className={styles.cardWidth}>
          <Image className="card-img-top"
              src="/dj6-notebook.png"
              alt="E-Commerce Image"
              height="300"
              width="400"
              layout="responsive"
            />
              <div className="card-body">
                <h5 className="card-title">Dj6-Notebook</h5>
                <p className="card-text">A published NPM package that will launch an in-browser coding environment, which allows a user to write & execute JS code.</p>
              </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">Featured Techs</li>
                <li className="list-group-item">- TypeScript</li>
                <li className="list-group-item">- Node.js</li>
                <li className="list-group-item">- React w/Redux</li>
              </ul>
              <div className="card-body">
                <div className={styles.cardLinks}>
                  <a href="/projects/dj6notebook" className="btn btn-primary">Details</a>
                  <NextLink href="https://www.npmjs.com/package/jsnote-dj6" passHref ><a className="btn btn-success">Demo</a></NextLink>
                </div>
              </div>
          </div>
      </div>

          <div className={styles.blackBorder}>
            <div className="card" className={styles.cardWidth}>
            <Image className="card-img-top"
              src="/ecommerce-python.jpeg"
              alt="E-Commerce - Python"
              height="300"
              width="400"
              layout="responsive"
            />
              <div className="card-body">
                <h5 className="card-title">E-Commerce Web Store</h5>
                <p className="card-text">A customizable e-commerce web application, integrated with marketing & client communication tools.</p>
              </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">Featured Techs</li>
                <li className="list-group-item">- Python</li>
                <li className="list-group-item">- Django</li>
                <li className="list-group-item">- Stripe API</li>
              </ul>
              <div className="card-body">
                <div className={styles.cardLinks}>
                <NextLink href="/projects/ecommerce-django" passHref ><a className="btn btn-success">Details</a></NextLink>
                <NextLink href="https://python-cfe-ecoomerce.herokuapp.com/" passHref ><a className="btn btn-primary">Demo</a></NextLink>
                </div>
              </div>
          </div>

      </div>
    
      <div className={styles.blackBorder}>
        <div className="card" className={styles.cardWidth}>
          <Image className="card-img-top"
            src="/ecommerce-mern.jpeg"
            alt="E-Commerce RezzShop"
            height="300"
            width="400"
            layout="responsive"
          />
          <div className="card-body">
            <h5 className="card-title">RezzShop</h5>
            <p className="card-text">RezzShop is a web application designed to provide low cost & modern e-commerce web services for small bars & restaurants.</p>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">Featured Techs</li>
            <li className="list-group-item">- React w/Redux</li>
            <li className="list-group-item">- Node.js</li>
            <li className="list-group-item">- MongoDB</li>
          </ul>
          <div className="card-body">
            <div className={styles.cardLinks}>
            <NextLink href="/projects/rezzshop" passHref ><a className="btn btn-success">Details</a></NextLink>
                <NextLink href="https://rezzshopapp.herokuapp.com/" passHref ><a className="btn btn-primary">Demo</a></NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className={styles.myRow2}>
        <div className={styles.blackBorder2}>
          <div className="card" className={styles.cardWidth2}>
            <Image className="card-img-top"
              src="/sommbook.png"
              alt="SommBook Image"
              height="300"
              width="400"
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Somm-J</h5>
              <p className="card-text">Somm-J is an interactive wine journal that allows users to store and catalogue all of their wine tastings that they wish to collect.</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Featured Techs</li>
              <li className="list-group-item">- Java Spring Boot</li>
              <li className="list-group-item">- React</li>
              <li className="list-group-item">- MySQL</li>
            </ul>
            <div className="card-body">
              <div className={styles.cardLinks} >
              <NextLink href="/projects/sommbook" passHref ><a className="btn btn-success">Details</a></NextLink>
                <NextLink href="https://github.com/Djcarrillo6/SommBook_v1" passHref ><a className="btn btn-warning">GitHub</a></NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  </div>

    </>
  )
}
export default ProjectList;