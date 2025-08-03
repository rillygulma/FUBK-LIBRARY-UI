// Import Carousel from Flowbite
import { Carousel } from 'flowbite-react';
import LabrianOffice from "../assets/UL-Office.JPG";
import ReaderServices from "../assets/Reader-Services.JPG";
import ProssingSection from "../assets/Prossing-section.JPG";
import PsiteOutsideReding from "../assets/Outside-Reading-Room-Psite.JPG";
import BooksShowcase from "../assets/Psite-Books.JPG";
import PsiteReadingArea from "../assets/Psite-Reading-Area.JPG";
import PsiteELibrary from "../assets/Psite-E-Library.JPG";
import TakeOffReadingArea from "../assets/Reading-Area-Take-off.JPG";
import TakeOffELibrary from "../assets/E-Library-take-off.JPG";
import CollegeReadingArea from "../assets/Reading-Area-College.JPG";

const Facilities = () => {
  const facilities = [
    {
      image: LabrianOffice, 
      title: 'University Labrian Office',
      description: 'This is the university Labrian Office.',
    },
    {
      image: ReaderServices,
      title: 'Reader Services',
      description: 'This is the University Reader Services Section.',
    },
    {
      image: ProssingSection,
      title: 'Processing Section',
      description: 'This is the University Library Processing Section.',
    },
    {
      image: PsiteOutsideReding,
      title: 'University Library permanent site Outside Reading Area',
      description: 'This is the First Reading Hall in the University P.site Library.',
    },
    {
      image: BooksShowcase,
      title: 'University Library permanent site Books Showcase',
      description: 'This is the P.site Books shelf.',
    }, 
    {
      image: PsiteReadingArea,
      title: 'University Library permanent site Reading Area',
      description: 'This is the University Library permanent site Reading Area.',
    },
    {
      image: PsiteELibrary,
      title: 'University Library permanent site E-Library',
      description: 'This is the University Library permanent site E-Library.',
    },
    {
      image: TakeOffReadingArea,
      title: 'Take-Off Reading Area',
      description: 'This is the University Take-Off Library Reading Area.',
    },
    {
      image: TakeOffELibrary,
      title: 'Take-Off E-Library',
      description: 'This is the University Take-Off E-Library.',
    },
    {
      image: CollegeReadingArea,
      title: 'College Reading Area',
      description: 'This is the College of Health Science Library Reading Area.',
    },
  ];

  return (
    <div className="text-center mt-40 px-4 lg:px-24 bg-gray-200">
      <h2 className="text-2xl font-bold text-custom text-blue-600 mb-6">OUR LIBRARY FACILITIES</h2>
      <Carousel className="w-full h-full">
        {facilities.map((facility, index) => (
          <div key={index} className="relative w-full flex flex-col items-center">
            <img 
              src={facility.image} 
              alt={facility.title} 
              className="object-cover w-full h-full sm:w-64 sm:h-64 rounded-lg mx-auto"
            />
            <div className="bg-blue-400 bg-opacity-70 text-black p-4 mt-4 rounded-lg max-w-xs">
              <h3 className="text-lg font-semibold">{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Facilities;
