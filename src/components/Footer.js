import React from 'react';


class Footer extends React.Component{

    render(){
        return (
            <footer>
                <div className="footer-row">
                    <h2>Contáctanos</h2>
                    <div className="footer-col">
                        <ul className="footer-ul-row">
                            <li><img className="pin-icon"  alt="pin" /> Hospital Sótero del Río Av. Concha y Toro 3459, Puente Alto, Santiago.</li>
                            <li><img className="pin-icon"  alt="telefono" />+56 9 93058454 </li>
                            <li><img className="pin-icon"  alt="mail" />contacto@agrupacionlupuschile.cl</li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;