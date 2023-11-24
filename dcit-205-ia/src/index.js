import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Faculty from './pages/Faculty';
import FacultyMember from './pages/FacultyMember';
import Events from './pages/Events';
import Programs from './pages/Programs';
import ProgramDetails from './pages/ProgramDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='' element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/contact' element={<Contact />}/>
				<Route path='/events' element={<Events />}/>
				<Route path='/programs' element={<Programs />}/>
				<Route path='/program/ug' element={<ProgramDetails />}/>
				<Route path='/faculty' element={<Faculty />}/>
				<Route path='/faculty/:id' element={<FacultyMember/>}/>
				<Route path='/programs' element={<Programs />}/>
				<Route path='/projects' element={<Projects />}/>
				<Route path='/projects/:id' element={<ProjectDetails />}/>
			</Routes>
		</BrowserRouter>
		<script src="https://kit.fontawesome.com/500063e750.js" crossorigin="anonymous"></script>
  	</React.StrictMode>
);