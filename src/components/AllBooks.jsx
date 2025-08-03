import { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultPdfImage = 'https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg'; // Default PDF image

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://fubk-library-backend-server.onrender.com/allbooks");
        console.log("response Data", response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Function to handle download
  const handleDownload = async (filename) => {
    try {
      const response = await fetch(`https://fubk-library-backend-server.onrender.com/ebooks/pdf/${filename}`);
      if (!response.ok) {
        throw new Error('Download failed: File not found');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename; // The filename for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (err) {
      setError(err.message);
    }
  };

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500">Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4 pt-6 text-center mt-40 px-4 lg:px-24 bg-gray-100'>
      <h2 className='mb-8 text-white text-5xl font-bold border-b-2 rounded bg-blue-700'>
        All Books Are Here
      </h2>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border rounded"
      />
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <Card key={book.isbn}>
              <Link to={`/book/${book.pdf}`}>
                <img 
                  src={book.imageURL || defaultPdfImage} // Use default image if imageURL is not available
                  alt={book.title}
                  className="object-cover h-48 w-full" 
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Author: {book.author}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Description: {book.description}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  ISBN: {book.isbn}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Published Year: {book.publishedYear}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Category: {book.category}
                </p>
              </Link>
              <button
                onClick={() => handleDownload(book.pdf)} // Use book.pdf for downloads
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download
              </button>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
