import React from 'react'
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground'
import PageTitle from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import dataSkills from '../../Skills.json'
import './Skills.css'

function Skills() {
        return(
            <div>
                <BlurredBackground/>
                <PageTitle title='compétences'/>
                <Nav/>
                    <div className='skillsList'>
                    {dataSkills.map((skills, index) => (
                        <figure key={index}>
                            <figcaption className='skillsTitle'>{skills.title}</figcaption>
                            <img className='skillsLogo' src={skills.logo} alt={skills.title} />
                            <p className='skillsRating'>{skills.rating}</p>
                        </figure>
                        
                    
                    ))}
                </div>   
            </div>
        )
}

export default Skills