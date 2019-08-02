import React from 'react';
import logo from '../img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Navbar extends React.Component{

    render(){
        return (
        

            <header>
                <nav className="menu-nav-row">
                    <div className="menu-left-col">
                        <img className="menu-icon" src={logo} alt="logo" />
                    </div>
                    <div className="menu-center-col">
                        <ul className="menu-ul-row">
                            <li className='menu-ul'><Link to={process.env.PUBLIC_URL + '/'}>Nosotros</Link></li>
                            <li className='menu-ul'><Link to='/holi'>¿Qué es el Lupus?</Link></li>
                            <li className='menu-ul'><Link to='/costear'>¿Cómo costear tu enfermedad?</Link></li>
                            <li className='menu-ul'><Link to='/dona'>Dona</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )

    }
}
export default Navbar;