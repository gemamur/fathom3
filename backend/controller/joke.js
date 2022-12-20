import Joke from "../model/joke.model";

export const countAllJokes = async(req,res) => {
    const jokes = await Joke.findAndCountAll();
    res.send({
        total: jokes.count
    });
};

export const getJoke = async(req,res)=>{
    const id = req.params.id;
    await Joke.findOne({ where: {id: id}}).then((item)=> {
        item ? res.send(item) : res.sendStatus(404);
    });
};

export const saveJoke = async (req,res) => {
    const joke = {

        type: req.body.type,
        setup: req.body.setup,
        punchline: req.body.punchline
    };
    await Joke.create(joke).then(()=>{
        res.sendSatus(201);
    });
};
