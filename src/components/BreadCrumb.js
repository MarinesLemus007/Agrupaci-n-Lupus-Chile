import React from 'react';
import './styles/breadCrumb.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class BreadCrumb extends React.Component{

    render(){
        return (
            <Breadcrumb >

                
                <Link to="/" className="breadcrumb-item">Inicio</Link>
                    
               
               
                <Breadcrumb.Item active >
                    {this.props.name}
                </Breadcrumb.Item>
                
            </Breadcrumb>
        )
    }
}
export default BreadCrumb;