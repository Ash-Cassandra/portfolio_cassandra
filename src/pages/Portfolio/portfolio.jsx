import React from 'react';
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground';
import PageTitle from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import dataProjects from '../../Projects.json'

function Portfolio() {
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='portfolio'/>
            <Nav/>
            <main>
            {dataProjects.map((projects, index) => (
                            <figure key={index} className='ProjectsCard'>
                                <figcaption className='ProjectsTitle'>{projects.title}</figcaption>
                                <img className='projectsImg' src={projects.cover} alt={projects.title} />
                            </figure>
                        ))}
            </main>
        </div>
    )
}

export default Portfolio