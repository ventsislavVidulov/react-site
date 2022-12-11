import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/jokes';

export const getAll = () => request.get(baseUrl);

export const getOne = (jokeId) => request.get(`${baseUrl}/${jokeId}`);

export const create = (jokeData) => request.post(baseUrl, jokeData);

export const edit = (jokeId, jokeData) => request.put(`${baseUrl}/${jokeId}`, jokeData);
