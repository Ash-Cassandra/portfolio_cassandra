import React from 'react';
import BlurredBackground from '../../components/BlurredBackground/BlurredBackground';
import PageTitle from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import './Home.css'
import Footer from '../../components/Footer/Footer';

function Home() {
    return(
        <div>
            <BlurredBackground/>
            <PageTitle title='cassandra'/>
            <Nav/>
                <main className='main-home'>
                    <ul className='description'>
                        <li>
                            Passionnée par les métiers de la tech et du numérique, j’ai entrepris une reconversion professionnelle vers le développement web. Je suis particulièrement intéressée par le développement front-end et l'expérience utilisateur.
                        </li>
                        <li>
                            J’ai également entrepris des projets centrés sur le design et la communication, ajoutant une touche artistique à mon arsenal de compétences.
                        </li>
                        <li className='textBold'>
                            Ensemble, nous transformerons vos idées en réalité. Ne laissez pas votre vision se perdre dans l'ombre de l'anonymat.
                        </li>
                        <li>
                            Faites briller votre présence en ligne. Contactez-moi dès maintenant.
                        </li>
                    </ul>
                </main>
                
        </div>
    )
}

export default Home