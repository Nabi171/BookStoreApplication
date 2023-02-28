import { ADDBOOK, TOGGLE_CHECKBOX } from "./actionTypes";

export const addbook = (name, author, thumbnail, price, rating) => {
    return {
        type: ADDBOOK,
        payload: { name, author, thumbnail, price, rating, featured: false }
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