import styles from '../../styles/ProjectList.module.css';

const ProjectList = () => {
  return (
    <>  
  <div className={styles.myrow}>
    <div className="card" className={styles.cardwidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Dj6-Notebook</h5>
            <p className="card-text">A published NPM package that can launch a in-browser coding environment to write & execute JavaScript code.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">TypeScript</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">React w/Redux</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">See Specs</a>
            <a href="#" className="card-link">View Demo</a>
          </div>
      </div>

      <div className="card" className={styles.cardwidth}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">E-Commerce Web Store</h5>
          <p className="card-text">A customizable e-commerce web application, integrated with marketing & client communication tools.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Python</li>
          <li className="list-group-item">Django</li>
          <li className="list-group-item">Stripe API</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">See Project Specs</a>
          <a href="#" className="card-link">View Demo</a>
        </div>
    </div>
  
    <div className="card" className={styles.cardwidth}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">RezzShop</h5>
        <p className="card-text">RezzShop is a tailored web application designed to provide low cost & modern e-commerce web services for small bars & restaurants.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">React w/Redux</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">MongoDB</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">See Specs</a>
        <a href="#" className="card-link">View Demo</a>
      </div>
    </div>
  </div>

    <div className={styles.myrow2}>
      <div className="card" className={styles.cardwidth}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Somm-J</h5>
          <p className="card-text">Somm-J is an interactive wine journal that allows users to store and catalogue all of their wine tastings that they wish to collect.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Java Spring Boot</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">MySQL</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">See Specs</a>
          <a href="#" className="card-link">View Demo</a>
        </div>
      </div>
    </div>

    </>
  )
}
export default ProjectList;