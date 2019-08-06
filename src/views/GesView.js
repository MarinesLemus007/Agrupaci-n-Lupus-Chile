import React from 'react';
import NavBar from '../components/Navbar';
import BodyGes from '../components/BodyGes';
import Footer from '../components/Footer'

class GesView extends React.Component{
   
    render(){
        return (
            <>
                <NavBar/>
                <BodyGes/>
                <Footer/>
            </>
        )
    }
}

export default GesView;