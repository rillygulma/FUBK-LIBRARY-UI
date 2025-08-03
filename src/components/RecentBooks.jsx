import { useState, useEffect } from 'react';
import BookCards from './BookCards';

const RecentBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch("https://fubk-library-backend-server.onrender.com/ebooks")
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 8)));
    }, []);
    
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Recent E-Books Uploaded</h1>
            <BookCards books={books} headline="Most Recent Books" />
        </div>
    );
};

export default RecentBooks;
