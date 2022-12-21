import React, {useState} from "react";
import { json, useNavigate } from "react-router-dom";
import { switchRoutes } from "@/core/router/routes";
import { Main } from "./main.component";
import UIFx from "uifx";
import laugh from "@/assets/sounds/laugh.wav";
import { getJoke, getTotalJokes } from "./main.api";

const initialJoke = {
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
        getJoke(id).then(setCurrentJoke);
      }, [id]);

      const sound = new UIFx(laugh);
      sound.play();
      return (

            <Main joke={currentJoke} setId={setId} />

      );
};