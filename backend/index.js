'use strict'

const sequelize = require("./model/dbconfig");
const Joke = require("./model/joke.model");
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));


sequelize.sync({ force: true }).then( () => {
    console.log("db is ready... inserting sample data...");
    
    fetch('https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json'). then((res) => res.json()).then( (json)=>
    json.forEach(element => {
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
    const express = require("express");
    const profileRoutes = require("./routes/joke");
    
    const app = express();
    app.use(express.json());
    
    // application routes
    app.get("/", (req, resp) => resp.send("application is up and running"));
    
    app.use("/api", profileRoutes.routes);
    
    const PORT = process.env.PORT || 3005;
    app.listen(PORT, () => {
      console.log(`Service endpoint = http://localhost:${PORT}`);
    });