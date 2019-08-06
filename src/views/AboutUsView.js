import React from 'react';
import '../index.css';
import NavbarR from '../components/NavbarR';
import BodyAboutUs from '../components/BodyAboutUs';
import Footer from '../components/Footer';

class AboutUsView extends React.Component{
   
    render(){
        return (
            <>
                <NavbarR/>
                <BodyAboutUs/>
                <Footer/>
            </>
        )
    }
}

export default AboutUsView;