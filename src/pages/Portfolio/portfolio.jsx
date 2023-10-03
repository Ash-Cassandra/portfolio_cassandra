import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground'
import PageTitle from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import dataProjects  from '../../Projects.json'
import './Portfolio.css'
import ProjectDetails from '../ProjectDetails/ProjectDetails';


function Portfolio() {
    
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='portfolio'/>
            <Nav/>
                <main className='projectsList'>
                    {dataProjects.map(( project, index) => (
                        <Link to={`./ProjectDetails/${project.id}`} key={project.id}>                  
                            <figure  className='projectsCard'>
                                <img className='projectsImg' src={project.cover} alt={project.title} title={project.skills}/>
                                <figcaption className='projectsTitle'>{project.title}</figcaption>
                                <figcaption className='projectsTag'>{project.tag}</figcaption>
                            </figure>
                        </Link>
                        
                    ))}
                </main>  
        </div>
    )
}

export default Portfolio