import { ADDBOOK, TOGGLE_CHECKBOX } from "./actionTypes";




const initialState = {
    books: [
        {
            "name": "Slow Horses (Deluxe Edition)",
            "author": "Mick Herron",
            "thumbnail": "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
            "price": 14,
            "rating": 3,
            "featured": false,
            "id": 1
        },
        {
            "name": "The Last Thing He Told Me: A Novel",
            "author": "Laura Dave",
            "thumbnail": "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
            "price": 13.99,
            "rating": 4,
            "featured": false,
            "id": 2
        },
    ],
    id: 3,
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