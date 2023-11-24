import { Link } from "react-router-dom"


export default function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <>
            <footer>
                <section>
                    <div className="footer-body">
                    <Link to="/"><img src="/img/logo.png" alt="UG Department of Computer Science Logo"/></Link>
                        <ul>
                            <Link to="/programs"><li>PROGRAMS</li></Link>
                            <Link to='/faculty'><li>FACULTY</li></Link>
                            <Link to='/contact'><li>CONTACT US</li></Link>
                            <Link to='/about'><li>ABOUT US</li></Link>
                            <Link to="/projects"><li>STUDENT PROJECTS</li></Link>
                            <Link to='/events'><li>EVENTS</li></Link>
                        </ul>
                    </div>
                    <div className="copy">Copyright &copy; {year} Department of Computer Science, University of Ghana</div>
                </section>
            </footer>
        </>
    )
}