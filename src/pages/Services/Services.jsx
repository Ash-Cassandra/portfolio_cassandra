import React from 'react'
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground'
import PageTitle from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import Collaps from '../../components/Collaps/Collaps'
import dataServices from '../../Services.json'
import './Services.css'
import Footer from '../../components/Footer/Footer'

function Services() {
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='services'/>
            <Nav/>
                <main className='servicesTitle'>
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
                </main>   
        </div>
        
    )
}

export default Services