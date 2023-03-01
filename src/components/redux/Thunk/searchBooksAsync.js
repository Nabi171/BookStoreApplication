import { searchBooks } from "../actions";

export const searchBooksAsync = (query) => {
    return async (dispatch) => {
        dispatch(searchBooks(query));

        const response = await fetch(`http://localhost:9000/books/search?q=${query}`);
        const books = await response.json();
        dispatch(searchBooks(books));
        // dispatch(searchBooks);
    };
};
