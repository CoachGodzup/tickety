import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../store/card';
import CardComponent from './cardComponent';
import { RootState } from '../store/root.reducer';

const CardList: React.FC = () => {
    const cards: Card[] = useSelector((state: RootState) => state.cards.cards);

    return (
        <div>
            {cards.map((card) => (
                <CardComponent key={card.id} card={card} />
            ))}
        </div>
    );
};

export default CardList;