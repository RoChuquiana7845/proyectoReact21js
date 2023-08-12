import axios from './axios';

export const getNameDeck = async () => axios.get(`new/shuffle/?deck_count=1`);

export const getInfoCard = async (deck, numcard) => axios.get(`${deck}/draw/?count=${numcard}`);
