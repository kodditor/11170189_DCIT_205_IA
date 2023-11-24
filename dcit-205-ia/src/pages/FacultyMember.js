import { Link, useParams } from "react-router-dom"
import { faculty } from "../data"

import styles from "../styles/facultyMember.module.css"

import Header from "../components/Header"
import Discovery from "../components/discover"
import Footer from "../components/Footer"

import { faLinkedin, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SocialButton({platform, link}){
    return (
        <><a href={link}>
            <button className={styles.social_button}>{platform[0].toUpperCase()+platform.slice(1)} <FontAwesomeIcon icon={(platform === 'linkedin')? faLinkedin : 
                                                        (platform === 'facebook')? faFacebook : 
                                                        (platform === 'twitter'? faXTwitter : faGlobe) }/></button>
        </a>
        </>
    )
}


export default function FacultyMember(){
    let { id } = useParams()
    let facultyMember = faculty.find((faculty)=>{return faculty.id === id})

    return (
        <>
            <Header />
            <section>
                <h3 className={styles.tree}><Link to="/faculty">Faculty</Link> / {facultyMember.name}</h3>
                <div className={styles.member_container}>
                    <div className={styles.member_image}>
                        <img src={facultyMember.img} alt={facultyMember.name}/>
                    </div>
                    <div className={styles.member_details}>
                        <p>{facultyMember.title}</p>
                        <h1>{facultyMember.name}</h1>
                        <p>{facultyMember.description}</p>
                        <div className={styles.links_container}>
                            {
                                Object.keys(facultyMember.socials).map((platform)=> {
                                    console.log(platform)
                                    return (
                                        <SocialButton platform={platform} link={facultyMember.socials[platform]} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Discovery />
            <Footer />
        </>
    ) 
}