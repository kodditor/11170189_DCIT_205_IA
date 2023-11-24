import styles from '../styles/header.module.css'
import {Link} from 'react-router-dom'


export default function Header(){
    return (
        <>
            <nav id={styles.main_nav}>
                <div>
                <Link to='/' ><img className={styles.logo} alt='UG Department of Computer Science Logo' src='/img/logo.png'/></Link>
                </div>
                <div>
                    <ul className={styles.link_list}>
                        <Link to='/' ><li>HOME</li></Link>
                        <Link to='/programs' ><li>PROGRAMS</li></Link>
                        <Link to='/projects' ><li>STUDENT PROJECTS</li></Link>
                        <Link to='/faculty' ><li>FACULTY</li></Link>
                        <Link to='/events' ><li>EVENTS</li></Link>
                        <Link to='/about' ><li>ABOUT US</li></Link>
                        <Link to='/contact' ><li><button>CONTACT US</button></li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}