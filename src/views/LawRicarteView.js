import React from 'react';
import NavBar from '../components/Navbar';
import BodyLawRicarte from '../components/BodyLawRicarte';
import Footer from '../components/Footer'

class LawRicarteView extends React.Component{
   
    render(){
        return (
            <>
                <NavBar state="law"/>
                <BodyLawRicarte/>
                <Footer/>
            </>
        )
    }
}

export default LawRicarteView;