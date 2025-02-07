'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCard } from '../store/card.reducer';
import { Button, Container, Textarea, TextInput } from '@mantine/core';

export type CardEditorProps = {
    modalHandler: {
        readonly open: () => void;
        readonly close: () => void;
        readonly toggle: () => void;
    }
}

const CardEditor: React.FC<CardEditorProps> = ({modalHandler}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const resetForm = () => {
        setTitle('');
        setBody('');    
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newCard = {
            id: uuidv4(),
            title,
            body,
            isDone: false,
        };
        dispatch(addCard(newCard));
        resetForm();
        modalHandler.close();
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Title"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea 
                    label="Body"
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}/>
                <Container style={{'paddingTop': '1em', 'paddingLeft': '0'}}>
                    <Button type="submit">Add Card</Button>
                </Container>
            </form>
        </Container>
    );
};

export default CardEditor;