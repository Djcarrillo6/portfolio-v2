import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from '../styles/Profile.module.css';


export default function Profile() {
  return (
    <>
    <NavBar />
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>David Anthony Carrillo Jr.</h1>
        <p>I'm a former hospitality professional turned software engineer, and I specialize in full-stack web development. I have been programming since I was </p>

        <section className={styles.container && styles.content}>
          <h2>Content One</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</p>

          <h3>Content Two</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
      </section>
      </div>
    </div>
    <Footer />
    </>
  )
}