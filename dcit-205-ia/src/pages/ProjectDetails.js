import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";
import { projects } from "../data";
import { useParams } from "react-router-dom";

import styles from "../styles/projectDetails.module.css"

import { Link } from "react-router-dom";

export default function ProjectDetails() {

    let { id } = useParams()
    let project = projects.find((project)=>{return project.id === id})
    
    return (
        <>
            <Header />
            <section>
                <h3 className={styles.tree}><Link to="/projects">Projects</Link> / {project.name}</h3>
                <div className={styles.project_container}>
                    <div className={styles.project_image}>
                        <img src={project.img} alt={project.name}/>
                    </div>
                    <div className={styles.project_details}>
                        <p>{project.type}</p>
                        <h1>{project.name}</h1>
                        <h3>by: {project.author}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}><button className="primary-button">Learn More</button></a>
                    </div>
                </div>
            </section>
            <Discovery />
            <Footer />
        </>
    ) 

}