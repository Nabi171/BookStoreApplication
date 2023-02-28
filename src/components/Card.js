import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import AddBook from './AddBook';
import { useSelector, useDispatch } from 'react-redux';
import fetchBooks from './redux/Thunk/fetchBooks';

const Card = () => {
    // const books = useSelector((state) => state.books);
    const [books, setbooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/books')
            .then(res => res.json())
            .then(data => setbooks(data));
    }, []);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchBooks)
    // }, [dispatch]);
    return (
        <div>
            <main className="py-12 2xl:px-6">
                <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                    <div className="order-2 xl:-order-1">
                        <div className="flex items-center justify-between mb-12">
                            <h4 className="mt-2 text-xl font-bold">Book List</h4>

                            <div className="flex items-center space-x-4">
                                <button className="filter-btn active-filter" id="lws-filterAll">All</button>
                                <button className="filter-btn" id="lws-filterFeatured">Featured</button>
                            </div>
                        </div>
                        <div className="lws-bookContainer">

                            {
                                books.map(book =>
                                    <BookCard
                                        book={book}
                                        key={book.id}
                                    />
                                )
                            }
                            {/* <!-- Card 1 --> */}

                            {/* <BookCard></BookCard> */}

                        </div>
                    </div>
                    <div>
                        {/* addbook */}
                        <AddBook></AddBook>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Card;