import React, { useState } from 'react';
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground';
import PageTitle from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import './Contact.css'
import Footer from '../../components/Footer/Footer';



function Contact() {

    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='contact'/>
            <Nav/>
                <main className='main-50'>
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
                                <a href="https://github.com/Ash-Cassandra" className='contactTitle' >
                                    GitHub<br/>
                                    </a>
                    </adress>
                </main>
        </div>
    )
}

export default Contact