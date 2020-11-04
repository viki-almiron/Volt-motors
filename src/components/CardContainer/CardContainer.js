import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './CardContainer.scss';

const CardContainer = ({cardIndex}) => {
    const [pixels, setPixels] = useState(85);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    const getVehicles = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://voltmotors.com.ar/api/exam/");
            setVehicles(res.data.cars);
        } 
        catch(err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
      };
    
    useEffect(() => {
        getVehicles();
    }, []);

    useEffect(() => {
        switch(cardIndex) {
            case 0: setPixels(0);break;
            case 1: setPixels(-340);break;
            case 2: setPixels(-680);break;
            default: setPixels(0);
        }
    }, [cardIndex]);

    return (
        <React.Fragment>
            {
                loading ? <img src="/images/loader4.gif" className="car-loading"/> : 
                <section className="cards-container" id="slider">
                <div className="cards-container-hidden" style={{transform: `translateX(${pixels}px)`}}>
                    {
                        vehicles.map(vehicle => {
                            return(
                                <Card
                                    key={vehicle.model}
                                    image={vehicle.image}
                                    model={vehicle.model}
                                    description={vehicle.description}
                                    caracs={vehicle.caracs}
                                />
                            )
                        })
                    }
                </div>
            </section>
        }
        </React.Fragment>     
    );
};

export default CardContainer;