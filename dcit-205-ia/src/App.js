import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Discovery from './components/discover';
import { courses, faculty } from './data';

function CourseCard({course}){
	return (
		<>
			<div className='discover-course'>
				<img src={course.img} />
				<h3>{course.title}</h3>
				<p>{course.periodToGrad}</p>
			</div>
		</>
	)
}


function FacultyCard({faculty}){
	return (
		<>
			<div className='faculty-box'>
				<span className='faculty-img'>
					<img src={faculty.img} />
				</span>
				<h4>{faculty.title}</h4>
				<h3>{faculty.name}</h3>
				<p>{faculty.description}</p>
			</div>
		</>
	)
}


function App() {
  	return (
    	<main className="App">
      		<Header />
			<section className='hero'>
				<span>
					<h1>Shaping Ghana's future tech force.</h1>
					<div className='hero-divider'></div>
					<p>Welcome to the Computer Science Department of the University of Ghana, 
						where we provide a world-class computer science education
						 to our students using cutting-edge technology and industry-standard 
						 development tools. </p>
					<div className='hero-buttons'>
						<p>Learn More</p>
						<button className='primary-button' style={{fontSize: '1.3rem'}}>Contact Us</button>
					</div>
				</span>
				<span>

				</span>
			</section>
			<section>
				<div className='stats'>
					<div>
						<h2>LET OUR RESULTS*<br /> DO THE TALKING</h2>
						<p>With a dedicated faculty and industry-standard tools, we empower our students 
							to go above and beyond in their academic feats.</p>
					</div>
					<div className='stat-box-container'>
						<div className='stat-box'>
							<h1>78%</h1>
							<h3>of students have a job one year after graduation.</h3>
						</div>
						<div className='stat-box'>
							<h1>34</h1>
							<h3>seed-funded tech companies started by graduates</h3>
						</div>
						<div className='stat-box'>
							<h1>15</h1>
							<h3>graduate-led companies accepted into Y Combinator</h3>
						</div>
						<div className='stat-box'>
							<h1>600+</h1>
							<h3>publicly accepted, peer-reviewed research papers</h3>
						</div>
					</div>
				</div>
				<span className='disclaimer'>* These statistics are for project purposes and are 
					purely fictional,<br /> they do not depict the actual current statistics of 
					the department</span>
			</section>
			<section className='discover'>
				<h2>DISCOVER OUR PROGRAMS</h2>
				<div className='discover-course-container'>
					{courses.map((course) =>{
						return(
							<CourseCard course={course} />
						)
					})}
				</div>
				<div style={{margin:'auto', display:'flex', justifyContent:'center'}}>
					<button className='secondary-button' style={{fontSize: '1.3rem', margin:'auto'}}>View All &rarr;</button>
				</div>
			</section>
			<section className='companies-section'>
				<h2>OUR STUDENTS WORK HERE</h2>
				<div className='company-container'>
				</div>
			</section>
			<section className='faculty'>
				<h2>OUR ESTEEMED FACULTY</h2>
				<div className='faculty-container'>
					{
						faculty.map((faculty) =>{
							return(
								<FacultyCard faculty={faculty} />
							)
						})
					}
				</div>
				<button className='secondary-button' style={{fontSize: '1.3rem', margin:'auto'}}> View All &rarr;</button>
			</section>
			<Discovery />
			<section className='faq-section'>
				<div>
					<h2>FREQUENTLY ASKED QUESTIONS</h2>
					<p>Find answers to common questions asked about the CS department.</p>
				</div>
				<div  className='faq-container'>
					<div className='faq'>
						<h3>What are the admission requirements?</h3>
						<p>Great Question! All students need at least a B3 in Elective ICT to meet admission requirements!</p>
					</div>
					<div className='faq'>
						<h3>Where can I apply?</h3>
						<p>You can apply using the University's general application here.</p>
					</div>
					<div className='faq'>
						<h3>What programs are offered?</h3>
						<p>We offer programs in varoius fields of computer science and information technology. Find more info here.</p>
					</div>
					<div className='faq'>
						<h3>Can I visit the department?</h3>
						<p>Come around any time during our working hours! (9:00 AM-5:00 PM)</p>
					</div>
				</div>
			</section>
			<Footer />
   		 </main>
  	);
}

export default App;
