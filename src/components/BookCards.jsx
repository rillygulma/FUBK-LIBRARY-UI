//import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/ebook-cover3.jpeg'; 
import ebookCover1 from '../assets/ebook-cover1.jpg'; 
import ebookCover2 from '../assets/ebook-cover2.jpeg'; 

// eslint-disable-next-line react/prop-types
const BookCards = ({ books = [] }) => {
  const imageMap = {
    'ebook-title-1': ebookCover1,
    'ebook-title-2': ebookCover2,
    // Add more mappings for your books
  };

  if (!Array.isArray(books) || books.length === 0) {
    return <div className="text-center">No books available.</div>;
  }

  return (
    <div className='my-5 px-4 lg:px-24'>
      {/* Removed the headline */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map(book => (
            <SwiperSlide key={book._id}>
              <Link to={`/ebooks/${book._id}`}>
                <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={imageMap[book.title] || placeholderImage} 
                    alt={book.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className='text-lg font-semibold'>{book.title}</h3>
                    <p className='text-sm text-gray-500'>{book.author}</p>
                    <p className='text-sm text-gray-600'>{book.description}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BookCards;
