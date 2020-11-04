import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';

const Contact = () => {
    return(
        <React.Fragment>
            <section id="contact-container">
                <h1>Escribinos</h1>
                <div className="contact-body">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13631.211802602387!2d-64.2058336!3d-31.3368146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85b84f1ac037a68f!2sVolt%20Motors!5e0!3m2!1ses-419!2sar!4v1604333185087!5m2!1ses-419!2sar" width="100%" height="312" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
            
                    <div className="contact-information">
                        <div className="contact-address">
                            <div className="address-icon-info">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="address-icon" />
                                <p>Córdoba, Argentina</p>
                            </div>
                
                            <div className="address-icon-info">
                                <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
                                <p>volt@mail.com</p>
                            </div>
                
                            <div className="address-icon-info">
                            <FontAwesomeIcon icon={faPhoneAlt} className="address-icon" />
                            <p>+543364356743</p>
                        </div>
                        </div>
            
                        <form className="contact-form">
                            <div className="contact-form-row">
                                <input type="text" placeholder="Nombre" className="contact-input contact-input-wrap" />
                                <input type="text" placeholder="Email" className="contact-input contact-input-wrap" />
                            </div>
                            <input type="text" placeholder="Asunto" className="contact-input" />
                            <textarea type="text" placeholder="Mensaje" className="contact-textarea"></textarea>
                            <button className="contact-send-button">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>  
        </React.Fragment>   
    )
};

export default Contact;
