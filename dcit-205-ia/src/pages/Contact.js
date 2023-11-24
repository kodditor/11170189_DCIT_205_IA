import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";

import styles from "../styles/contact.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Contact () {

    return (
        <>
            <Header />
            <section className={`centered ${styles.section}`}>
                <h1>Contact Us</h1>
                <h3>#UGDCS</h3>
                <div className={styles.contact_socials_container}>
                    <span className={styles.contact_social}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    <span className={styles.contact_social}>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </span>
                    <span className={styles.contact_social}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    <span className={styles.contact_social}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </span>
                </div>
                <div className={styles.contact_details}>
                    <div>
                        <h2>Give us a call!</h2>
                        <p>+233 501 382 035<br />+233 559 145 698</p>
                    </div>
                    <span className={styles.divider}></span>
                    <div>
                        <h2>Send us an email!</h2>
                        <p>dcs@ug.edu.gh</p>
                    </div>
                </div>
                <div className={styles.location_container}>
                    <h2>Location</h2>
                    <p>University Of Ghana, Legon Campus
                        Opposite Mathematics Department</p>
                </div>
                <div className={styles.form_container}>
                    <h2>Join the Newsletter</h2>
                    <form className={styles.newsletter_form}>
                        <input type="text" placeholder="kweku@ananse.com" required/>
                        <button><FontAwesomeIcon icon={faArrowRight}/></button>
                    </form>
                </div>
            </section>
            <Discovery />
            <Footer />
        </>
    )

}