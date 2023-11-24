import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Discovery from "../components/discover"

import styles from "../styles/programDetails.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProgramDetails() {

    function handleToggle(e){
        const elementPTag = e.target.parentNode.parentNode.children['1']
        const chevron = e.target.parentNode.children['1']
        if(chevron.localName==='span'){chevron.style.transform = (chevron.style.transform === ""? "rotate(180deg)": "")}
        if(elementPTag.localName==='p'){elementPTag.style.display = (elementPTag.style.display === "none") ? "block": "none"}; 
        // This took longer than expected - for seven lines of code :)
    }


    return (
        <>
            <Header />
            <section className={`centered ${styles.section}`}>
                <h1>Undergraduate Programs</h1>
                <h3>Open the door to sought-after technology careers with a world-class Bachelor of Science in Computer Science or Information Technology degree</h3>
                <div>
                    <div className={styles.intro_container}>
                        <span>
                            <h2>Bsc. Computer <br />Science</h2>
                            <p>A Computer Science degree opens doors to a dynamic world of tech and innovation. 
                                It equips students to understand and build complex systems, explore AI, cybersecurity, and data science. 
                                This program fosters adaptability and creativity, essential for thriving in the ever-evolving field of computing. 
                                Join a community dedicated to pushing the boundaries of what's possible in the digital age.</p>
                        </span>
                        <span>
                            <img src="/img/program-1.jpeg" alt="Some computer science students"/>
                        </span>
                    </div>
                    <div className={styles.details_container}>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Program Prerequisites</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>To qualify for admission into Computer Science programmes at Level 200, candidates must have taken the following courses at Level 100:<br />
                                MATH 121: Algebra and Trigonometry <br />
                                MATH 122: Calculus I <br />
                                DCIT 101: Introduction to Computer Science I <br />
                                DCIT 104: Programing Fundamentals <br /><br />

                                Every student in the Department of Computer Science must own his or her laptop with minimum specification of:<br />
                                i3 64-bit Processor<br />
                                8GB RAM<br />
                                500GB HD or 256 SSD2
                            </p>
                        </div>
                        <h3>Course Outline</h3>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 100</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                UGRC 150	Critical Thinking and Practical Reasoning<br />
                                MATH 121	Algebra and Trigonometry<br />
                                MATH 123	Vectors and Geometry<br />
                                DCIT 101	Introduction to Computer Science<br />
                                DCIT 103	Office Productivity Tools<br />
                                STAT 111	Introduction to Statistics and Probability I<br /><br />

                                <h4>Second Semester</h4><br />
                                UGRC 110	Academic Writing I<br />
                                MATH 122	Calculus I<br />
                                MATH 126	Algebra and Geometry<br />
                                STAT 112	Introduction to Statistics and Probability II<br />
                                DCIT 104	Programming<br />
                                DCIT 102	Computer Hardware Fund. and Circuits<br />

                            </p>
                        </div>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 200</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                UGRC 210	Academic Writing II<br />
                                DCIT 201	Programming I<br />
                                DCIT 203	Digital and Logic Systems Design<br />
                                DCIT 205	Multi Media and Web Design<br />
                                DCIT 207	Computer Architecture & Organisation<br />
                                MATH 223	Calculus II<br /><br />

                                <h4>Second Semester</h4><br />
                                UGRC 220	Introduction to African Studies<br />
                                DCIT 202	Mobile Application Development<br />
                                DCIT 204	Data Structures & Algorithm I<br />
                                DCIT206	Systems Administration<br />
                                DCIT208	Software Engineering<br />
                                DCIT 212	Numerical and Computational Methods<br />


                            </p>
                        </div>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 300</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                DCIT 301	Operating Systems<br />
                                DCIT 303	Computer Networks<br />
                                DCIT 305	Database Fundamentals<br />
                                DCIT 313	Introduction to Artificial Intelligence<br />
                                MATH 359	Discrete Mathematics<br /><br />
                                ELECTIVES:<br />
                                DCIT 307	Mini-Project<br />
                                DCIT 309	Embedded Systems and IoT<br />
                                DCIT 311	Machine Learning<br /><br />

                                
                                <h4>Second Semester</h4><br />
                                DCIT 302	Human Computer Interaction<br />
                                DCIT 304	Research Methods<br />
                                DCIT 308	Data Structures and Algorithms II<br />
                                DCIT 312	Information Security Management<br />
                                DCIT 318	Programming II<br /><br />
                                ELECTIVES:<br />
                                DCIT 306	Cloud Computing Numerical and Computational Methods<br />
                                DCIT 316	Computational models for Social Media Mining<br />
                                DCIT 314	Game Engine Architecture<br />
                                DCIT 322	Database Management Administration<br />
                            </p>
                        </div>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 400</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                DCIT 400	Project<br />
                                DCIT 401	Social, Legal, Ethical and Professional Issues<br />
                                DCIT 407	Image Processing<br /><br />
                                ELECTIVES:<br />
                                DCIT 403	Designing Intelligent Agents<br />
                                DCIT 405	Statistical Models and Methods for Data Science<br />
                                DCIT 411	Bioinformatics<br />
                                DCIT 417	Network Performance Analysis and Modeling<br />
                                DCIT 423	Network Servers and Infrastructure<br /><br />

                                <h4>Second Semester</h4><br />
                                DCIT 400	Project<br />
                                DCIT 402	Management Principles in Computing<br />
                                DCIT 418	Systems and Network Security<br />
                                DCIT 428	Wireless Systems and Networks<br /><br />
                                ELECTIVES:<br />
                                DCIT 404	Advanced Databases<br />
                                DCIT 406	Advanced Computer Networks<br />
                                DCIT 408	Compilers<br />
                                DCIT 426	Telecommunication Systems<br />
                                DCIT 412	Computer Vision<br />
                                DCIT 414	Data Mining and Warehousing<br />
                                DCIT 416	Digital Signal Processing<br />
                                DCIT 422	Information Visualization<br />
                            </p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className={styles.intro_container}>
                        <span>
                            <h2>Bsc. Information<br />Technology</h2>
                            <p>An Information Technology degree navigates you through a tech-driven world, 
                                covering cybersecurity, system optimization, and digital transformation. 
                                From network administration to problem-solving, it equips you for real-world IT challenges. 
                                Join a community shaping the future of digital solutions.</p>
                        </span>
                        <span>
                            <img src="/img/program-1.jpeg" alt="Some computer science students"/>
                        </span>
                    </div>
                    <div className={styles.details_container}>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Program Prerequisites</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                Every student in the Department of Computer Science must own his or her laptop with minimum specification of:<br />
                                i3 64-bit Processor<br />
                                8GB RAM<br />
                                500GB HD or 256 SSD<br />
                            </p>
                        </div>
                        <h3>Course Outline</h3>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 100</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                UGRC 150	Critical Thinking and Practical Reasoning<br />
                                DCIT 101	Introduction to Computer Science<br />
                                DCIT 103	Office Productivity Tools<br />
                                DCIT 105	Mathematics for IT Professionals<br />
                                STAT 111	Introduction to Statistics and Probability I<br /><br />
                                ELECTIVES:<br/>
                                MATH 121	Algebra and Trigonometry<br />
                                MATH 123	Vectors and Geometry<br />
                                ECON 101	Introduction to Economics I<br /><br />
                                <h4>Second Semester</h4><br />
                                UGRC 110	Academic Writing I<br />
                                MATH 122	Calculus I<br />
                                MATH 126	Algebra and Geometry<br />
                                STAT 112	Introduction to Statistics and Probability II<br />
                                DCIT 104	Programming<br />
                                DCIT 102	Computer Hardware Fund. and Circuits<br />

                            </p>
                        </div>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 200</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                UGRC 210	Academic Writing II<br />
                                DCIT 201	Programming I<br />
                                DCIT 203	Digital and Logic Systems Design<br />
                                DCIT 205	Multi Media and Web Design<br />
                                DCIT 207	Computer Architecture & Organisation<br />
                                DCIT 209	E-Business Architectures<br /><br />

                                <h4>Second Semester</h4><br />
                                UGRC 220	Introduction to African Studies<br />
                                DCIT 202	Mobile Application Development<br />
                                DCIT 204	Data Structures & Algorithm I<br />
                                DCIT206	Systems Administration<br />
                                DCIT208	Software Engineering<br /><br />
                                ELECTIVES<br />
                                DCIT 200	Internship<br />
                                DCIT 212	Numerical and Computational Methods<br />
                                DCIT 214	Information Modeling and Specification<br />

                            </p>
                        </div>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 300</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                DCIT 301	Operating Systems<br />
                                DCIT 303	Computer Networks<br />
                                DCIT 305	Database Fundamentals<br />
                                DCIT 313	Introduction to Artificial Intelligence<br />
                                DCIT 317	IT Project Management<br /><br />
                                ELECTIVES:<br />
                                DCIT 307	Mini-Project<br />
                                DCIT 315	Principles of 3D Environment<br />
                                DCIT 321	Software Evolution<br /><br />

                                <h4>Second Semester</h4><br />
                                DCIT 302	Human Computer Interaction<br />
                                DCIT 304	Research Methods<br />
                                DCIT 308	Data Structures and Algorithms II<br />
                                DCIT 312	Information Security Management<br />
                                DCIT 318	Programming II<br /><br />
                                ELECTIVES:<br />
                                DCIT 314	Game Engine Architecture<br />
                                DCIT 322	Database Management Administration<br />

                            </p>
                        </div>
                        <div className={styles.details}>
                            <div onClick={handleToggle}>
                                <h3>Level 400</h3>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <p style={{display:'none'}}>
                                <h4>First Semester</h4><br />
                                DCIT 400	Project<br />
                                DCIT 401	Social, Legal, Ethical and Professional Issues<br />
                                DCIT 409	Digital Forensics<br /><br />
                                ELECTIVES:<br />
                                DCIT 413	Play and Games<br />
                                DCIT 415	Advanced Software Engineering<br />
                                DCIT 419	Agile Methods<br />
                                DCIT 421	Persuasive Systems Development<br /><br />

                                <h4>Second Semester</h4><br />
                                DCIT 400	Project<br />
                                DCIT 402	Management Principles in Computing<br />
                                DCIT 418	Systems and Network Security<br />
                                DCIT 428	Wireless Systems and Networks<br /><br />
                                ELECTIVES:<br />
                                DCIT 404	Advanced Databases<br />
                                DCIT 406	Advanced Computer Networks<br />
                                DCIT 408	Compilers<br />
                                DCIT 426	Telecommunication Systems<br />
                                DCIT 412	Computer Vision<br />
                                DCIT 414	Data Mining and Warehousing<br />
                                DCIT 416	Digital Signal Processing<br />
                                DCIT 422	Information Visualization<br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Discovery />
            <Footer />
        </>
    )

}