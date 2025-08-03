import { useState, useEffect } from 'react';

const Journals = () => {
  const [journals, setJournals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultPdfImage = 'https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg'; // Replace with your default PDF image URL

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await fetch('https://fubk-library-backend-server.onrender.com/journals'); // Replace with your endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJournals(data); // Adjust this if your data structure is different
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJournals();
  }, []);

  const addJournal = (newJournal) => {
    setJournals((prevJournals) => [...prevJournals, newJournal]);
  };

  // Function to handle download
  const handleDownload = async (filename) => {
    try {
      const response = await fetch(`https://fubk-library-backend-server.onrender.com/journals/pdf/${filename}`); // Ensure this matches your backend route
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

  // Filter journals based on search term
  const filteredJournals = journals.filter((journal) =>
    journal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-gray-500">Loading journals...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="`container mx-auto p-4 pt-6 text-center mt-40 px-4 lg:px-24 bg-gray-100`">
      <h1 className="mb-8 text-white text-7xl font-bold border-b-2 rounded bg-blue-700">
        List Of Our Journals
      </h1>
      <input
        type="text"
        placeholder="Search journals..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border rounded"
      />
      <div className="flex flex-wrap justify-center">
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal) => (
            <div key={journal._id} className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <h2 className="text-lg font-bold mb-2">{journal.title}</h2>
                <p className="text-gray-600 mb-2">Author: {journal.author}</p>
                <p className="text-gray-600 mb-2">Published Year: {journal.publishedYear}</p>
                <p className="text-gray-600 mb-4">{journal.description}</p>
                <img
                  src={defaultPdfImage}
                  alt="Default PDF"
                  className="w-full h-64 object-cover mb-4" // Adjust size as needed
                />
                <button
                  onClick={() => handleDownload(journal.pdf)} // Use journal.pdf for downloads
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Download
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No journals found.</p>
        )}
      </div>
      <button
        onClick={() => addJournal({ title: 'Journal 4', pdf: '1728835465786.pdf' })} // Updated to include pdf
        className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Journal 4
      </button>
    </div>
  );
};

export default Journals;
