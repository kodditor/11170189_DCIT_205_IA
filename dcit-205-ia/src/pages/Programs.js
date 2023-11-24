import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";

import styles from "../styles/programs.module.css"

import { courses } from "../data";
import { Link } from "react-router-dom";

function ProgramCard({program}){
    return (
        <>
            <div className={styles.program_card}>
                <img src={program.img} alt={program.name}/>
                <h3>{program.title}</h3>
                <h4>{program.periodToGrad} | {program.duration}</h4>
                <p>{program.description}</p>
                <Link to={`/program/ug`}><button className="secondary-button">Learn More</button></Link>
            </div>
        </>
    )
}

export default function Programs() {

    return (
        <>
            <Header />
            <section className={`centered ${styles.section}`}>
                <h1>Our Programs</h1>
                <h3>Curated with every student in mind</h3>
                <div className={styles.programs_container}>
                {
                    courses.map((program)=> {
                        return(
                            <ProgramCard program={program} />
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