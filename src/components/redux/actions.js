import { ADDBOOK, TOGGLE_CHECKBOX } from "./actionTypes";

export const addbook = (bookName, author, thumbnail, price, ratings) => {
    return {
        type: ADDBOOK,
        payload: { bookName, author, thumbnail, price, ratings, checkbox: false }
    };
}

export const toggleCheckbox = (id) => {
    return {
        type: TOGGLE_CHECKBOX,
        payload: {
            id
        }
    };
}