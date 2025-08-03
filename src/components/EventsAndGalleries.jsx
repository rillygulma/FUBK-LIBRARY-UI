import { useState } from 'react';
import { Carousel } from "flowbite-react";
import MedicalCouncil1 from '../assets/CLINICAL SCIENCE2.JPG';
import MedicalCouncil2 from '../assets/CLINICAL SCIENCE2.JPG';
import LibraryTeam from '../assets/LibraryTeam.jpeg';

const BlogPosts = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Verification exercise by the Medical and Dental Council Of Nigeria with former Vice-Chancellor of FUBK, Prof. Bello Shehu. And the Dupty Vice-Chancellor Prof. Aliyu Abdullahi Turaki.',
      description: 'A comprehensive verification exercise conducted by the Medical and Dental Council of Nigeria to uphold standards for healthcare practitioners.',
      content: 'The Faculty of Clinical Sciences at Federal University Birnin Kebbi, in collaboration with the Medical and Dental Council of Nigeria, recently completed an extensive verification exercise. This initiative was designed to confirm the credentials of practicing healthcare professionals and ensure adherence to national standards. By meticulously verifying medical licenses, academic qualifications, and ongoing professional education, the Faculty and the Council demonstrate their commitment to upholding high ethical and professional standards within Nigerian healthcare sector. This rigorous exercise is vital for safeguarding patient health and ensuring that only verified, qualified professionals are entrusted with clinical roles across the country.',
      date: '2023-11-14',
      images: [MedicalCouncil1, MedicalCouncil2, LibraryTeam],
    },
    {
      id: 2,
      title: 'Blog Post 2',
      description: 'This is a short description of blog post 2.',
      content: 'This is the full content of blog post 2.',
      date: '2022-01-02',
      images: [
        'https://via.placeholder.com/600x400?text=Image+1',
        'https://via.placeholder.com/600x400?text=Image+2',
      ],
    },
    {
      id: 3,
      title: 'Blog Post 3',
      description: 'This is a short description of blog post 3.',
      content: 'This is the full content of blog post 3.',
      date: '2022-01-03',
      images: [
        'https://via.placeholder.com/600x400?text=Image+1',
        'https://via.placeholder.com/600x400?text=Image+2',
      ],
    },
  ]);

  const [activePostId, setActivePostId] = useState(null);
  const [searchTitle, setSearchTitle] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const togglePost = (id) => {
    setActivePostId(activePostId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 mt-40 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="flex mb-4 justify-center">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={handleTitleChange}
          className="px-4 py-2 border border-gray-300 rounded-md w-1/2 sm:w-1/3 lg:w-1/4"
        />
      </div>

      <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center">Event & Gallery Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-md shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-4">
                <Carousel>
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="object-cover w-full h-full rounded-md"
                    />
                  ))}
                </Carousel>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">{post.description}</p>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <button
                onClick={() => togglePost(post.id)}
                className="mt-2 text-blue-600 hover:underline"
              >
                {activePostId === post.id ? 'Read Less' : 'Read More'}
              </button>
              {activePostId === post.id && (
                <div className="mt-2 text-gray-800">
                  <p>{post.content}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
