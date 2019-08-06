import React from 'react';
import us from '../img/us.jpeg';


class BodyAboutUs extends React.Component{

    render(){
        return (
                <section>
                    <div className='section-row'>
                        <div className='section-col'>
                            <h2>Sobre nosotros</h2>
                            <p>Agrupación Lupus Chile busca ser una fuente continua de información y apoyo
                            a los pacientes y familiares que deben vivir con esta enfermedad</p>
                        </div>
                        <div className='section-img-col'>
                            <img className="us-img" src={us} alt="us" />
                        </div>
                    </div>
                    <div className='carousel-text-row'>
                        <div className='carousel-text-col'>
                            <h2>Nuestra Misión</h2>  
                        </div>
                    </div> 
                    <div className='carousel-row'>
                        <div className='carousel-col'>
                           
                        </div>
                    </div>
                    <div className='section-two-row'>
                        <div className='section-two-col'>
                            <h2>Involucrate</h2>
                            <p>¡A Lupus Chile nunca le sobran manos! Si quieres apoyarnos con 
                                tu trabajo o aportes no dudes en contactarnos.</p>
                        </div>
                        <div className='section-img-col'>
                        </div>
                    </div>
                    <div className='button-row'>
                        <div className='button-col'>
                            <button className='button-lupus'>Suscribete</button>
                        </div>
                        <div className='button-col'>    
                            <button className='button-lupus'>Participa</button>
                        </div>
                        <div className='button-col'>   
                            <button className='button-lupus'>Dona</button>
                        <div/>
                    </div>
                    </div>
                </section>
        )
    }
}
export default BodyAboutUs;