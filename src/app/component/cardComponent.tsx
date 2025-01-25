'use client'

import React, { useState } from 'react';
import { Card } from '../store/card';
import { Button, Checkbox, Group, InputLabel, Slider } from '@mantine/core';

interface CardComponentProps {
    card: Card;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <Group>
                <InputLabel>{card.title}</InputLabel>
                {card.isDone ? <Checkbox checked /> : <Checkbox />}
                <Button onClick={handleToggle}>Dettagli</Button>
            </Group>
            {isToggled ? <p>{card.body}</p> : <></>}
        </>
    );
};

export default CardComponent;