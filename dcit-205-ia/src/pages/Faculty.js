import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";

import styles from  '../styles/faculty.module.css';

import { faculty } from "../data";
import { Link } from "react-router-dom";
import { FacultyCard } from "../Home";

export default function Faculty() {
    return (
        <>
            <Header />
            <section  className={`centered ${styles.faculty_section}`}>
                <h1>Our Esteemed Faculty</h1>
                <p>Meet the Visionaries Behind the Code: Our Esteemed Faculty Pioneering Excellence in 
                    Computer Science Education.</p>
                <div className={`${styles.faculty_box_container}`}>
                    {
                        faculty.map((faculty) => {
                            return (
                                <Link className={styles.faculty} to={`/faculty/${faculty.id}`}>
                                    <FacultyCard faculty={faculty} />
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
            <Discovery />
            <Footer />
        </>
    )
}