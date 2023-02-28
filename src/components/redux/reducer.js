import { ADDBOOK, TOGGLE_CHECKBOX } from "./actionTypes";




const initialState = {
    books: [],
    id: 1,
};
// const nextTodoId = (books) => {
//     const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
//     return maxId + 1;
// }

// const nextTodoId = (books) => {
//     const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
//     return maxId + 1;
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDBOOK:
            const id = state.id;
            return {
                ...state,
                id: id + 1,
                books: [
                    ...state.books,
                    {
                        name: action.payload.name,
                        author: action.payload.author,
                        thumbnail: action.payload.thumbnail,
                        price: action.payload.price,
                        rating: action.payload.rating,
                        id: id,


                    }
                ]
            };
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                rows: state.books.map(book => {
                    if (book.id === action.payload.id) {
                        return {
                            ...book,
                            featured: !book.featured
                        };
                    }
                    return book;
                })
            };


        default:
            return state;
    }
}

export default reducer;