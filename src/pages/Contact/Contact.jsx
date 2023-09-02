import React, { useState } from 'react';
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground';
import PageTitle from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import './Contact.css'



function Contact() {

    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='contact'/>
            <Nav/>
                <main>
                    <adress className="contact">
                            <p>Pour toute demande de devis ou pour tout renseignement ou question, contactez-moi.<br/>
                            Chaque demande sera étudiée.</p>
                                <a href="mailto:cassandra_devweb@outlook.fr" className='contactTitle'>
                                    Par mail<br/>
                                    <span className='contactInfo'>cassandra_devweb@outlook.fr</span>
                                    </a>
                                <a href="tel:0675073509" className='contactTitle' >
                                    Par téléphone<br/>
                                    <span className='contactInfo'>06.75.07.35.09</span>
                                    </a>
                    </adress>
                </main>
        </div>
    )
}

export default Contact