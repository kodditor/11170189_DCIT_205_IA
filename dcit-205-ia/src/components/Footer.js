

export default function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <>
            <footer>
                <section>
                    <div className="footer-body">
                        <img src="/img/logo.png"/>
                        <ul>
                            <li>PROGRAMS</li>
                            <li>FACULTY</li>
                            <li>CONTACT US</li>
                            <li>ABOUT US</li>
                            <li>STUDENT PROJECTS</li>
                            <li>EVENTS</li>
                        </ul>
                    </div>
                    <div className="copy">Copyright &copy; {year} Department of Computer Science, University of Ghana</div>
                </section>
            </footer>
        </>
    )
}