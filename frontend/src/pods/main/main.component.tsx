import React from 'react';
import { Card } from '@mui/material';

interface Props {
    joke: {
        type: string,
        setup: string,
        punchline: string
    },
    setId: React.Dispatch<React.SetStateAction<number>>;
}

export const Main = (props: Props) => {

    const {joke, setId} = props;

    return( 
        <><Card variant="outlined">{joke.setup}</Card></>
    )
}