import { ADDBOOK } from "./actionTypes";

export const addbook = (bookName, author, thumbnail, price, ratings, id, checkbox) => {
    return {
        type: ADDBOOK,
        payload: { bookName, author, thumbnail, price, ratings, id, checkbox }
    };
}