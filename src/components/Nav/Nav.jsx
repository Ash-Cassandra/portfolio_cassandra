import React, {useState} from "react"
import { Link, useLocation } from 'react-router-dom';
import './Nav.css'
import MyPicture from '../../assets/my_picture.webp'

function Nav () {
    const location = useLocation();
  const currentPath = location.pathname;

    const btnList = [
        { id: 1, label: 'services', className: 'btnNav'},
        { id: 2, label: 'Skills', className: 'btnNav'},
        { id: 3, label: '', img: MyPicture,  className: 'btnNav'},
        { id: 4, label: 'portfolio', className: 'btnNav'},
        { id: 5, label: 'contact', className: 'btnNav'},
    ]
    
    
return (
        <nav className="Nav">
            <ul className="NavList">
                {btnList.map(btn => {
                        return (
                            <li key={btn.id}>
                                <Link
                                to={`/${btn.label}`}
                                className={`${
                                    btn.className} ${currentPath === `/${btn.label}` ? 'active' : ''
                                }`}
                                >
                                {btn.img ? <img src={btn.img} alt={btn.label} /> : btn.label}
                                </Link>
                                
                            </li>
                        );
                })}
            </ul>
        </nav>
    );
    }

export default Nav