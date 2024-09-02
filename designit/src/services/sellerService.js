import { request } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/offers';

export const getAll = async() => {
    const result = await request.get(baseUrl);
    const offers = Object.values(result);
    return offers;
};

export const addOffer = async(data) => {
    const result = await request.post(baseUrl, data);
    return result
};
