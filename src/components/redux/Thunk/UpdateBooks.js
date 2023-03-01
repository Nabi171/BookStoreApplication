
import { addbook } from "../actions";

const UpdateBooks = (id, inputValue1, inputValue2, inputValue3, inputValue4, inputValue5) => {

    const name = inputValue1;
    const author = inputValue2;
    const thumbnail = inputValue3;
    const price = inputValue4;
    const rating = inputValue5;


    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({

                name: name,
                author: author,
                thumbnail: thumbnail,
                price: price,
                rating: rating,
                featured: false,

            }),
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const book = await response.json();

        const up = dispatch(addbook(book.name, book.author, book.thumbnail, book.price, book.rating));

        // console.log(up)
    };
}




export default UpdateBooks;