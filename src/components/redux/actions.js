import { ADDBOOK, TOGGLE_CHECKBOX, LOADED, SET_SELECTED_BOOK_DATA, DELETE_BOOK } from "./actionTypes";

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

export const setSelectedBookData = (bookData) => ({
    type: SET_SELECTED_BOOK_DATA,
    payload: bookData,
});

export const deletebook = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id,
    };
}