import React from 'react';
import NavbarR from '../components/NavbarR';
import BodyGes from '../components/BodyGes'

class GesView extends React.Component{
   
    render(){
        return (
            <>
                <NavbarR/>
                <BodyGes/>
            </>
        )
    }
}

export default GesView;