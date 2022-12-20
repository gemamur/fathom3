
import sequelize from "./model/dbconfig";
import Joke from "./model/joke.model";
const fetch = (...args:[string]) => import('node-fetch').then(({default: fetch}) => fetch(...args));
 
  type Element = { type: string; setup: string; punchline: string; };

sequelize.sync({ force: true }).then( () => {
    console.log("db is ready... inserting sample data...");
    
    fetch('https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json').then((res) => res.json()).then( (json:any)=>
    json.forEach((element: Element) => {
        const joke = {
            type: element.type,
            setup: element.setup,
            punchline: element.punchline
        };
        
         Joke.create(joke);
    }));
    console.log("sample data inserted...");
    });
    
    // application
    import express from "express";
    import {routes} from "./routes/joke";
    
    const app = express();
    app.use(express.json());
    
    // application routes
    app.get("/", (req, resp) => resp.send("application is up and running"));
    
    app.use("/api", routes);
    
    const PORT = process.env.PORT || 3005;
    app.listen(PORT, () => {
      console.log(`Service endpoint = http://localhost:${PORT}`);
    });