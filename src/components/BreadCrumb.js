import React from 'react';
import './styles/breadCrumb.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';


class BreadCrumb extends React.Component{

    render(){
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    Inicio
                </Breadcrumb.Item>
               
                <Breadcrumb.Item active >
                    {this.props.name}
                </Breadcrumb.Item>
                
            </Breadcrumb>
        )
    }
}
export default BreadCrumb;