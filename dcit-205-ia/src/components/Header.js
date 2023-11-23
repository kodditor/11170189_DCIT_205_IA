import '../styles/header.css'
import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <>
            <nav id='main-nav'>
                <div>
                    <img className='logo' alt='UG Department of Computer Science Logo' src='/img/logo.png'/>
                </div>
                <div>
                    <ul className='link-list'>
                        <li>HOME</li>
                        <li>PROGRAMS</li>
                        <li>STUDENT PROJECTS</li>
                        <li>FACULTY</li>
                        <li>ABOUT US</li>
                        <li><button>CONTACT US</button></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}