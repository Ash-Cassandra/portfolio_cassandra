import React from 'react'
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground'
import PageTitle from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import dataSkills from '../../Skills.json'
import './Skills.css'
import Rating from '../../components/Ratings/Ratings'

function Skills() {
        return(
            <div>
                <BlurredBackground/>
                <PageTitle title='compétences'/>
                <Nav/>
                    <main className='skillsList'>
                        {dataSkills.map((skills, index) => (
                            <figure key={index} className='skillsCard'>
                                <figcaption className='skillsTitle'>{skills.title}</figcaption>
                                <img className='skillsLogo' src={skills.logo} alt={skills.title} />
                                <Rating className="skillsRating" rating={parseInt(skills.rating)}/>
                            </figure>
                        ))}
                    </main>   
            </div>
        )
}

export default Skills