'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Card as CardData } from '../store/card';
import { Card, Checkbox, Group, Title, Text } from '@mantine/core';

interface CardComponentProps {
    card: CardData;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const secondaryColor = '#6c757d'; // Define secondaryColor

    return (
        <div style={{ width: 340, height: 400, overflow:'auto', margin: 'auto' }}>
            <Card shadow="sm">
                <Image
                    src="https://picsum.photos/340/160"
                    width={340}
                    height={160}
                    alt="Random"
                />
        
                <Group style={{ marginBottom: 5 }}>
                    <Title>{card.title}</Title>
                    {card.isDone ? <Checkbox checked /> : <Checkbox />}
                </Group>
        
                <Text size="sm" style={{ color: secondaryColor }}>
                    {card.body}
                </Text>
        
            </Card>
        </div>


/*
        <Group >
            <InputLabel>{card.title}</InputLabel>

            <Switch label="dettagli" onClick={handleToggle} />
            {isToggled ? <p>{card.body}</p> : <></>}
        </Group>
        */
    );
};

export default CardComponent;