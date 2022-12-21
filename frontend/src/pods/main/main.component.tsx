import React, {useState} from 'react';
import { ClickAwayListener, Card, CardContent,  } from '@mui/material';
import UIFx from "uifx";
import laugh from "@/assets/sounds/laugh.wav";

interface Props {
    joke: {
        type: string,
        setup: string,
        punchline: string
    },
    id:number,
    setId: React.Dispatch<React.SetStateAction<number>>;
}

export const Main = (props: Props) => {

    const {joke, id, setId} = props;

    const [showPunch, setShowPunch] = useState(false);

    const handleClick = () => {
        if(showPunch === false){
            
            setShowPunch(true);
            
            const sound = new UIFx(laugh);
            sound.play();
            
        }else{
             
            setShowPunch(false);
            setId(id+1);
        }
        
    }

    return( 
        <>
        <ClickAwayListener onClickAway={handleClick}>
            <Card variant="outlined" sx={{maxWidth:345, m:2, p:2}} onClick={handleClick}>
                <CardContent>
                    <div className='joke'>{joke.setup}</div>
                    <div className='punchline'>{showPunch ? joke.punchline : ""}</div>

                </CardContent>
            </Card>
        </ClickAwayListener>
        </>
    )
}