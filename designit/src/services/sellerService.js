import { request } from "./requester";

const baseUrl = 'http://localhost:3030/data/offers';

export const getAll = async() => {
    const result = await request.get(baseUrl);
    const offers = Object.values(result);
    return offers;
};

export const addOffer = async(data, token) => {
    const result = await request.post(baseUrl, data, token);
    return result
};
