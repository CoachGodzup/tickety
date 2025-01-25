'use client'

import React, { useState } from 'react';
import { Card } from '../store/card';

interface CardComponentProps {
    card: Card;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    /*const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };*/

    return (
        <div className="card">
            <h2>{card.title}</h2>
            {/*isToggled ? <p>{card.body}</p> : <></>*/}
 {/*           <button onClick={handleToggle}>
                {isToggled ? 'Hide' : 'Show'} Details
            </button>*/}
        </div>
    );
};

export default CardComponent;