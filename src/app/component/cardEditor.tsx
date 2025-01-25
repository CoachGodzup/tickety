'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCard } from '../store/card.reducer';
import { Button, Group, Textarea, TextInput } from '@mantine/core';

const CardEditor: React.FC = () => {
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Card</h2>
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
                <Button type="submit">Add Card</Button>
            </form>
    );
};

export default CardEditor;