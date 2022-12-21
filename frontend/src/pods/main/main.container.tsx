import React, {useState} from "react";
import { Main } from "./main.component";
import { getJoke, getTotalJokes } from "./main.api";

interface InitialJoke {
    type:string,
    setup:string,
    punchline:string
}

const initialJoke:InitialJoke = {
    type:"",
    setup:"",
    punchline:""
}


export const MainContainer = () => {

    const [totalJokes, setTotalJokes] = useState(1);
    const [currentJoke, setCurrentJoke] = useState(initialJoke);
    const [id, setId] = useState(1);
    
    React.useEffect(() => {
        getTotalJokes().then((json)=>setTotalJokes(json.total));
      }, []);

    React.useEffect(()=>{
        if(id>totalJokes)setId(1);
        getJoke(id).then(setCurrentJoke);
      }, [id]);

      return (

            <Main joke={currentJoke} id={id} setId={setId} />

      );
};