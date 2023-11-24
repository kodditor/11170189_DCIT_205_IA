import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";
import { projects } from "../data";
import { Link } from "react-router-dom";

import styles from "../styles/projects.module.css"

function ProjectCard({project}){
    return (
        <>
            <div className={styles.project}>
                <div><img src={project.img}/></div>
                <h2>{project.name}</h2>
                <p>{project.type}</p>
                <h3>by: {project.author}</h3>
                <Link to={`/projects/${project.id}`}><button className="secondary-button">View</button></Link>
            </div>
        </>
    )
}


export default function Projects() {
    return (
        <>
            <Header />
            <section className={`centered ${styles.section}`}>
                <h1>Student Projects</h1>
                <p>Discover the innovative projects and services created by our students!</p>
                <div>
                {
                    projects.map((project)=>{
                        return(
                            <ProjectCard project={project} />
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