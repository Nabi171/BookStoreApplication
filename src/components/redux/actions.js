import { ADDBOOK, TOGGLE_CHECKBOX, LOADED } from "./actionTypes";

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

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books,
    }
}