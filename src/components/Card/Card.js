import React, { useState } from 'react';
import './Card.scss';

const Card = ({image, model, description, caracs}) => {

    const [displayContent, setDisplayContent] = useState(false);

    return (
        <article className={`card ${displayContent ? 'opened': ''}`}
            style={{backgroundImage: `url(${image})`}}
        >
            <div className="card-wrapper">
                <div className="card-wrapper-relative">
                    <header className="card-header">
                        <h2>{ model }</h2>
                    </header>
                    <div className="card-content">
                        { description }
                        {
                            caracs.map (carac => {
                                return <li>{carac}</li>
                            })
                        }
                    </div>
                    <footer className="card-footer">
                        <button
                            type="button"
                            className="card-open-button"
                            onClick={() => setDisplayContent(!displayContent)}
                        >
                            <span className="card-open-button-icon">+</span>
                        </button>
                    </footer>
                </div>
            </div>
        </article>
    )
};

export default Card;