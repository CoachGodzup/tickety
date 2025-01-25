'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../store/card';
import CardComponent from './cardComponent';
import { RootState } from '../store/root.store';
import { Flex } from '@mantine/core';

const CardList: React.FC = () => {
    const cards: Card[] = useSelector((state: RootState) => state.cards.cards);

    return (
        <Flex>
            {cards.map((card) => (
                <CardComponent key={card.id} card={card} />
            ))}
        </Flex>
    );
};

export default CardList;