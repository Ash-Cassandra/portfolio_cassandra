import React, { useContext } from 'react'
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground'
import PageTitle from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import dataProjects  from '../../Projects.json'
import './Portfolio.css'


function Portfolio() {
    
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='portfolio'/>
            <Nav/>
                <main className='projectsList'>
                    {dataProjects.map(( project, index) => (
                        <figure key={index} className='projectsCard'>
                            <figcaption className='projectsTitle'>{project.title}</figcaption>
                            <img className='projectsImg' src={project.cover} alt={project.title} />
                        </figure>
                    ))}
                </main>  
        </div>
    )
}

export default Portfolio