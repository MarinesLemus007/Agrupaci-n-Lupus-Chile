import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import BodyAboutUs from '../components/BodyAboutUs';
import Footer from '../components/Footer';

class AboutUsView extends React.Component{

    render(){
        return (
            <>
                <Navbar/>
               
                <Footer/>
            </>
        )
    }
}

export default AboutUsView;