import React from 'react';
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground';
import PageTitle from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import './Contact.css'


//handleClick pour afficher le mail et le numero de téléphone

function Contact() {
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='contact'/>
            <Nav/>
                <main>
                    <adress className="contact">
                            <p>Pour toute demande de devis ou pour repondre à vos questions, je suis là pour vous aider.</p>
                                <a href="mailto:cassandra_devweb@outlook.fr" className='contactInfo'>Par mail</a><br/>
                                <a href="tel:0675073509" className='contactInfo'>Par téléphone</a><br/>
                    </adress>
                </main>
        </div>
    )
}

export default Contact