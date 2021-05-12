import Head from 'next/head'
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import styles from '../styles/Home.module.css'

import Image from 'next/image'
import nodeIcon from '../public/nodejs-brands.svg';
import jsIcon from '../public/js-brands.svg'
import pythonIcon from '../public/python-brands.svg';
import javaIcon from '../public/java-brands.svg';
import reactIcon from '../public/react-brands.svg';
import angularIcon from '../public/angular.svg';
import awsIcon from '../public/aws-2.svg';
import djangoIcon from '../public/django-community.svg';
import googleCldIcon from '../public/google-cloud-3.svg';
import azureIcon from '../public/microsoft-azure-2.svg';
import mongoDbIcon from '../public/mongodb.svg';
import mysqlIcon from '../public/mysql-5.svg';
import nextjsIcon from '../public/nextjs-3.svg';
import npmIcon from '../public/npm.svg';
import reactNatvIcon from '../public/react-native-firebase-1.svg';
import reduxIcon from '../public/redux.svg';
import springBootIcon from '../public/spring-14.svg';
import typeScrtIcon from '../public/typescript.svg';
import linuxIcon from '../public/linux.svg';

export default function Home() {
 
  return (
    <>
      <Head>
        <title>Dj's Portfolio</title>
        {/* Keyword selection to match technical skill section */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      </Head>
      
      < NavBar />
      <div className={styles.container}>
        <div id="home" className={styles.customRow}>
        <p className={styles.text} >Hi, I'm DJ!</p>
            <div className={styles.square} ></div>
            <div className={styles.circle} ></div>
            <div className={styles.square} ></div>
            <div className={styles.circle} ></div>
            <div className={styles.square} ></div>
            <div className={styles.circle} ></div>
            <div className={styles.square} ></div>
            <div className={styles.circle} ></div>
            <div className={styles.square} ></div>
            <div className={styles.circle} ></div>
        </div>

        <div className={styles.customRow}>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <p className={styles.text} >I design & build web & mobile applications.</p>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
        </div>

        <div className={styles.customRow}>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <p className={styles.text} >Take a look, at my most recent apps below!</p>
        </div>

        <section className={styles.projectGallery} id="projectGallery">
          <p className={styles.projectGalleryHeader}>Application Gallery</p>
          <ProjectList />
        </section>
        
          <div className={styles.skillGallery}>
            <p className={styles.techSkillHeader}>My Favorite Technologies</p>
                <div className={styles.iconRow2}>
                      <Image src={pythonIcon}
                        alt="Python"
                        width={60}
                        height={60}
                        />
                        <Image src={typeScrtIcon}
                        alt="Typescript"
                        width={40}
                        height={40}
                        />
                        <Image src={jsIcon}
                        alt="JavaScript"
                        width={75}
                        height={75}
                        />
                      <Image src={djangoIcon}
                        alt="Django"
                        width={125}
                        height={125}
                        />
                </div>

                <div className={styles.iconRow3}>
                        <Image src={nodeIcon}
                        alt="Nodejs"
                        width={300}
                        height={200}
                        />
                        <Image src={reactIcon}
                        alt="React"
                        width={225}
                        height={225}
                        />

                    <div className={styles.column1}>
                              <Image src={angularIcon}
                              alt="Angularjs"
                              width={175}
                              height={115}
                              />
                              <Image src={reduxIcon}
                              alt="Redux"
                              width={85}
                              height={85}
                              />
                    </div>
                    <div className={styles.column2}>
                          <Image src={reactNatvIcon}
                          alt="React Native"
                          width={95}
                          height={95}
                          />
                          <Image src={npmIcon}
                          alt="NPM"
                          width={75}
                          height={75}
                          className={styles.npmI}
                          />
                          <Image src={nextjsIcon}
                          alt="Nextjs"
                          width={150}
                          height={150}
                          />
                    </div>
                </div>
                
                <div className={styles.iconRow4}>
                        {/* <Image src={herokuIcon}
                        alt="Heroku"
                        width={100}
                        height={100}
                        /> */}
                        <Image src={awsIcon}
                        alt="AWS"
                        width={100}
                        height={100}
                        />
                      <Image src={googleCldIcon}
                        alt="Google Cloud"
                        width={115}
                        height={115}
                        />
                      <Image src={azureIcon}
                        alt="Azure Cloud"
                        width={115}
                        height={115}
                        />
                </div>

                <div className={styles.iconRow5}>
                        <Image src={springBootIcon}
                        alt="SpringBoot"
                        width={100}
                        height={100}
                        />
                        <Image src={javaIcon}
                        alt="Java"
                        width={100}
                        height={100}
                        />
                        <Image src={linuxIcon}
                        alt="Linux"
                        width={75}
                        height={75}
                        />
                </div>

                <div className={styles.iconRow6}>
                        <Image src={mongoDbIcon}
                        alt="MongoDB"
                        width={300}
                        height={175}
                        className={styles.mongStyles}
                        />
                        <Image src={mysqlIcon}
                        alt="MySQL"
                        width={80}
                        height={80}
                        />
                </div>
          </div>

        <div className={styles.customRow}>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
        </div>

        <section className={styles.contactSection} id="contact-form">
          <p className={styles.sectionHeader2}>Web Apps. Mobile Apps. Websites.</p>
          <p className={styles.sectionHeader2}>Do you need something built?</p>
          <p className={styles.sectionHeader2}>Let's Connect.</p>
        </section>
        <ContactForm />        

        <div className={styles.footerRow}>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
          <div className={styles.square} ></div>
          <div className={styles.circle} ></div>
        </div>
        <Footer />
    </div>

    

    </>
  )
}
