import React from 'react'
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground'
import PageTitle from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import Collaps from '../../components/Collaps/Collaps'
import dataServices from '../../Services.json'
import './Services.css'

function Services() {
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='services'/>
            <Nav/>

            <div className='servicesTitle'>
                {dataServices.map((service, index) => (
                    <Collaps key={index} title={service.title}>
                        <ul className='servicesDescription'>
                            {service.description.map((description, index) => (
                                <li key={index}>
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </Collaps>
                ))}
            </div>    
        </div>
    )
}

export default Services