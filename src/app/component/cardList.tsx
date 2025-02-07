'use client'

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../store/card';
import CardComponent from './cardComponent';
import { RootState } from '../store/root.store';
import { Flex } from '@mantine/core';

const CardList: React.FC = () => {
    const cards: Card[] = useSelector((state: RootState) => state.cards.cards);

    const cardListElements = useMemo(() => cards.map((card) => (
        <CardComponent key={card.id} card={card} />
    )), [cards]);

    return (
        <Flex p={20} wrap={'wrap'}>
            {cardListElements}
        </Flex>
    );
};

export default CardList;