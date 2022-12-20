import Joke from "../model/joke.model";

export const countAllJokes = async(req: any,res: { send: (arg0: { total: number; }) => void; }):Promise<void>=> {
    const jokes = await Joke.findAndCountAll();
    res.send({
        total: jokes.count
    });
};

export const getJoke = async(req: { params: { id: number; }; },res: { send: (arg0: Joke) => void; sendStatus: (arg0: number) => void; })=>{
    const id = req.params.id;
    await Joke.findOne({ where: {id: id}}).then((item)=> {
        item ? res.send(item) : res.sendStatus(404);
    });
};

export const saveJoke = async (req: { body: { type: string; setup: string; punchline: string; }; },res):Promise<void> => {
    const joke = {

        type: req.body.type,
        setup: req.body.setup,
        punchline: req.body.punchline
    };
    await Joke.create(joke).then(()=>{
        res.sendSatus(201);
    });
};
