import React from 'react';
import './Partners.scss';

const Partners = () => {
    return (
        <section id="partners">
          <h1>Aliados estratégicos</h1>
          
          <div className="partners-container">
            <div className="partners-img">
              <img src='/images/zurich.png' alt="Partner-1" />
            </div>
    
            <div className="partners-img">
              <img src='/images/bbva.png' alt="Partner-2" />
            </div>
    
            <div className="partners-img">
              <img src='/images/movistar.png' alt="Partner-3" />
            </div>
    
            <div className="partners-img">
              <img src='/images/oresteberta.png' alt="Partner-4" />
            </div>
    
            <div className="partners-img">
              <img src='/images/dta.png' alt="Partner-5" />
            </div>
    
            <div className="partners-img">
              <img src='/images/inti.png' alt="Partner-6" />
            </div>
          </div>
        </section>
    );
} 

export default Partners; 
