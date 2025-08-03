import { Button } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';
import { saveAs } from 'file-saver';

const SingleBook = () => {
  const { bookTitle, imageURL, category, 
    bookDescription, bookPDFURL, } = useLoaderData();

    // handle Download PDF
    const handleDownload = () => {
      //const pdfUrl = {bookPDFURL};
      saveAs(bookPDFURL, 'downloaded-file.pdf');
    }
  return (
    <div className='mt-28 px-4 lg:px-24 font-custom'>
      <img src={imageURL} alt="image"/>
      <h2 className='text-base font-bold'>{bookTitle}</h2>
      <p className='font-semibold italic'>{category}</p>
      <p>{bookDescription}</p>
      <Button onClick={handleDownload} className='mt-3'>Download Book</Button>
    </div>
  )
}

export default SingleBook;
