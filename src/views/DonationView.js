import React from 'react';
import NavBar from '../components/Navbar';
import FriendsForm from '../components/FriendsForm';
import Footer from '../components/Footer'
import Submit from '../components/Submit.js';

class Donation extends React.Component{
   
    render(){
        return (
            <>
                <NavBar/>
                <FriendsForm/>
                <Submit/>
                <Footer/>
            </>
        )
    }
}

export default Donation;