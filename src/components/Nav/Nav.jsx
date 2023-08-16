import React, {useState} from "react"
import { Link } from 'react-router-dom';
import './Nav.css'
import MyPicture from '../../assets/my_picture.webp'

function Nav () {
    const [btnOrder, setBtnOrder] = useState ([1, 2, 3, 4, 5])

    const btnList = [
        { id: 1, label: 'services', className: 'btnNav btnServices'},
        { id: 2, label: 'Skills', className: 'btnNav btnSkills'},
        { id: 3, label: '', img: MyPicture,  className: 'btnNav btnHome'},
        { id: 4, label: 'portfolio', className: 'btnNav btnPortfolio'},
        { id: 5, label: 'contact', className: 'btnNav btnContact'},
    ]
    
return (
        <nav className="Nav">
            <ul className="NavList">
                {btnOrder.map(btnIndex => {
                    const btn = btnList.find(btn => btn.id === btnIndex);
                        return (
                            <li key={btnIndex}>
                                <Link to={`/${btn.label}`} className={btn.className}>
                                   {btn.img ? <img src={btn.img} /> : btn.label} 
                                </Link>
                                
                            </li>
                        );
                })}
            </ul>
        </nav>
    );
    }

export default Nav