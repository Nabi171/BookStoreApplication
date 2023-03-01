import React, { useState } from 'react';
import { SET_SELECTED_BOOK_DATA } from './redux/actionTypes';
import { useDispatch } from 'react-redux';
import UpdateBooks from './redux/Thunk/UpdateBooks';

const UpdateCart = ({ book }) => {
    const { id, name, author, thumbnail, price, rating } = book;
    const [inputValue1, setInputValue] = useState(book.name);
    const [inputValue2, setInputValue2] = useState(book.author);
    const [inputValue3, setInputValue3] = useState(book.thumbnail);
    const [inputValue4, setInputValue4] = useState(book.price);
    const [inputValue5, setInputValue5] = useState(book.rating);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        // onChange(newValue);
    };
    const handleInputChange2 = (event) => {
        const newValue = event.target.value;
        setInputValue2(newValue);
        // onChange(newValue);
    };
    const handleInputChange3 = (event) => {
        const newValue = event.target.value;
        setInputValue3(newValue);
        // onChange(newValue);
    };
    const handleInputChange4 = (event) => {
        const newValue = event.target.value;
        setInputValue4(newValue);
        // onChange(newValue);
    };
    const handleInputChange5 = (event) => {
        const newValue = event.target.value;
        setInputValue5(newValue);
        // onChange(newValue);
    };
    const dispatch = useDispatch();
    const updateTheBook = () => {
        dispatch(UpdateBooks(id, inputValue1, inputValue2, inputValue3, inputValue4, inputValue5));
        alert('update')
    }

    // const selectedBookData = useSelector((state) => state[SET_SELECTED_BOOK_DATA])
    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Update the Book</h4>
                <form className="book-form"
                // onSubmit={handleSubmit}

                >
                    <div className="space-y-2">
                        <label for="name">Book Name</label>
                        <input
                            name="name"
                            required className="text-input" type="text" id="input-Bookname"
                            value={inputValue1}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label for="author">Author</label>
                        <input required className="text-input" type="text" id="input-Bookauthor" name="author"
                            value={inputValue2}
                            onChange={handleInputChange2}
                        />
                    </div>

                    <div className="space-y-2">
                        <label for="image">Image Url</label>
                        <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail"
                            value={inputValue3}
                            onChange={handleInputChange3}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label for="price">Price</label>
                            <input required className="text-input" type="number" id="input-Bookprice" name="price"
                                value={inputValue4}
                                onChange={handleInputChange4}
                            />
                        </div>

                        <div className="space-y-2">
                            <label for="ratings">Rating</label>
                            <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5"
                                value={inputValue5}
                                onChange={handleInputChange5}
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
                        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button
                        onClick={updateTheBook}
                        type="submit" className="submit" id="submit">Update Book</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCart;