import React from 'react';
import { addbook, toggleCheckbox } from './redux/actions';
import { connect, useSelector, useDispatch } from 'react-redux';
import addedNewbook from './redux/Thunk/addedNewbook';
import { updateExpression } from '@babel/types';

const AddBook = ({ addedNewbook }) => {
    const products = useSelector((state) => state.books);
    console.log(products)
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const author = event.target.elements.author.value;
        const thumbnail = event.target.elements.thumbnail.value;
        const price = parseFloat(event.target.elements.price.value);
        const rating = parseInt(event.target.elements.rating.value);
        addedNewbook(name, author, thumbnail, price, rating);
        alert('added book in server side');
        window.location.reload();


    };
    const dispatch = useDispatch();
    const handleFeature = () => {
        dispatch(updateExpression());
    }

    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form className="book-form"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-2">
                        <label for="name">Book Name</label>
                        <input
                            name="name"
                            required className="text-input" type="text" id="input-Bookname" />
                    </div>

                    <div className="space-y-2">
                        <label for="author">Author</label>
                        <input required className="text-input" type="text" id="input-Bookauthor" name="author" />
                    </div>

                    <div className="space-y-2">
                        <label for="image">Image Url</label>
                        <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label for="price">Price</label>
                            <input required className="text-input" type="number" id="input-Bookprice" name="price" />
                        </div>

                        <div className="space-y-2">
                            <label for="ratings">Rating</label>
                            <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4"
                            onClick={handleFeature}
                        />
                        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
};

// export default AddBook;
export default connect(null, { addedNewbook })(AddBook);