import React from 'react';
import NavBar from '../components/Navbar';
import BodyQuestions from '../components/BodyQuestions';
import Footer from '../components/Footer'

class FrequentQuestions extends React.Component{
   
    render(){
        return (
            <>
                <NavBar/>
                <BodyQuestions/>
                <Footer/>
            </>
        )
    }
}

export default FrequentQuestions;