import React from 'react';
import NavBar from '../components/Navbar';
import BodyGes from '../components/BodyGes'

class GesView extends React.Component{
   
    render(){
        return (
            <>
                <NavBar/>
                <BodyGes/>
            </>
        )
    }
}

export default GesView;