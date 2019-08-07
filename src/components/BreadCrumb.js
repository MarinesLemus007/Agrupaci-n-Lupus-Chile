import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';

class BreadCrumb extends React.Component{

    render(){
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    Inicio
                </Breadcrumb.Item>
                <Breadcrumb.Item disables href="/holi">
                    ¿Qué es el Lupus?
                </Breadcrumb.Item>
                <Breadcrumb.Item disables href="/Ges">
                    ¿Qué es el Ges?
                </Breadcrumb.Item>
                <Breadcrumb.Item disables href="/Quienes-Somos">
                    ¿Quiénes somos?
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Data
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default BreadCrumb;