import { addbook } from "../actions";

const addedNewbook = (name, author, thumbnail, price, rating) => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:9000/books', {
            method: "POST",
            body: JSON.stringify({
                name: name,
                author: author,
                thumbnail: thumbnail,
                price: price,
                rating: rating,
                featured: false
            }),
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const book = await response.json();
        // const { name, author, thumbnail, price, rating } = book;
        dispatch(addbook(book.name, book.author, book.thumbnail, book.price, book.rating));
    };
}

export default addedNewbook;