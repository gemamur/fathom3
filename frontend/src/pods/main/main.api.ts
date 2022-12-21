import {url} from "@/common/global";

interface Joke {
    type:string,
    setup: string,
    punchline: string
}
interface Total {
    total: number
}

export const getJoke = async (id:number): Promise<Joke> => {
    const response = await fetch(`${url}joke/${id}`);
    return response.json();
}

export const getTotalJokes = async (): Promise<Total> => {
    return fetch(`${url}jokes`).then((response)=>response.json());
}