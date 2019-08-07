import React from 'react';
import NavBar from '../components/Navbar';
import FriendsForm from '../components/FriendsForm';
import Footer from '../components/Footer'

class Donation extends React.Component{
   
    render(){
        return (
            <>
                <NavBar/>
                <FriendsForm/>
                <Footer/>
            </>
        )
    }
}

export default Donation;