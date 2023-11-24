import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";
import styles from"../styles/about.module.css"

export default function About() {
 
    return (
        <>
            <Header />
            <section className={`centered ${styles.section}`}>
                <h1>About Us</h1>
                <h3>#UGDCS</h3>
                <div className={styles.about_box}>
                    <h3>ORGANISATION</h3>
                    <p>The University of Ghana is one of the Africa's most preeminent public universities. 
                        Our impact on individuals, our region and the world is profound. 
                        whether we are launching young people into a boundless future or 
                        confronting the grand challenges of our time through dauntless research. 
                        UG educates more than 38,000 students annually, with approximately 
                        2.64% being computer science students. We turn ideas into impact and transform the world around us. 
                        For more about our impact, visit our news site, UG News.</p>
                </div>
                <div className={styles.about_box}>
                    <h3>UG-DCS PEOPLE</h3>
                    <p>If you are inspired by a big challenge, you've come to the right place! 
                        The computer science community at the University of Ghana encourages 
                        it's people to be vibrant and brave in 
                        taking on new challenges that push boundaries beyond imagination.</p>
                </div>
                <div className={styles.about_box}>
                    <h3>BUILDING OUR PEOPLE</h3>
                    <p>So what defines our students, faculty and community members? 
                        Above all, it is our belief in the infinite possibilities and our unshakable optimism. 
                        It is a connection to others near and far. A hunger for socio-economic 
                        transformation that pushes us to tackle challenges and pursue progress. 
                        It is the conviction that together we can create a world of good. Join us on the journey.</p>
                </div>
            </section>
            <Discovery />
            <Footer />
        </>
    )
}