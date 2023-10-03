import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path='/Portfolio' element={<Portfolio />} />                 
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Portfolio/ProjectDetails/:id' element={<ProjectDetails />}/>
                {/* <Route path='*' element={<Error404 />} /> */}
          </Routes>
            <Footer />
    </Router>
  )
};


export default App
