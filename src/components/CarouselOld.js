import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import law from '../img/derechos.jpg';
import edu from '../img/educacion.jpg';
import med from '../img/medicamentos.jpg';
import pac from '../img/paciente.jpg';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                        <div className='img-carousel'>
                            <img src={pac} alt="paciente" />
                            <p className="legend">Apoyo a paciente</p>
                        </div>
                        <div className='img-carousel'>
                            <img src={edu} alt="educacion" />
                            <p className="legend">Educación</p>
                        </div>
                        <div className='img-carousel'>
                            <img src={law} alt="derechos" />
                            <p className="legend">Derechos</p>
                        </div>
                        <div className='img-carousel'>
                            <img src={med} alt="medicamentos" />
                            <p className="legend">Medicamentos</p>
                        </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;