import MainLibrary from "./University-Library.JPG";
import TakeOffLibrary from "./Take-Off-Library.JPG";
import CollegeLibrary from "./College-Library.JPG";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Branches = () => {
  const branches = [
    {
      id: "main-library",
      title: "MAIN LIBRARY",
      image: MainLibrary,
      description: `The Main Library is located at the Main Campus; and it 
                    serves as the Central Library that coordinates the 
                    activities, services and operations of all the  
                    sections/units and branch libraries in the University. 
                    Specifically, it caters for the needs of all the faculties that 
                    are located in the Main Campus.`,
    },
    {
      id: "education-library",
      title: "FACULTY OF EDUCATION LIBRARY",
      image: MainLibrary, // Replace with correct image
      description: `This Library is situated within the Faculty of Education, 
                    Main Campus; and it serves the needs of the parent 
                    Faculty, though staff and students from other faculties 
                    are lso free to use the Library. The Library is equipped 
                    with books, journals and other information resources 
                    related to Education only. In addition, computers and 
                    Internet facilities are available as well as photocopying 
                    services. All enquiries/issues pertaining to the services 
                    of the Library are referred to the Faculty Librarian or the 
                    staff on duty.`,
    },
    {
      id: "medical-sciences-library",
      title: "BASIC MEDICAL SCIENCES LIBRARY",
      image: CollegeLibrary,
      description: `This Library is located within the Faculty of Basic 
                    Medical Sciences, Main Campus; and it specifically 
                    caters for the needs of the Faculty. However, staff and 
                    students from other faculties are also allowed to use the 
                    Library if interested. The Library is equipped with 
                    medical books and journals as well as computers and 
                    Internet facilities for research purposes. The Library is 
                    equally accessible to all bonade members from other faculties`,
    },
    {
      id: "law-library",
      title: "LAW LIBRARY",
      image: TakeOffLibrary, // Replace with correct image
      description: `This ultra-modern Library is situated within the Faculty of Law and it specifically serves the parent Faculty, and though staff and students from other faculties may also use the Library for reading and research purposes. The Library is equipped with law books, journals and other legal materials as well as computers and Internet 4 facilities and photocopying services. Other facilities include general reading room, research room, and study carrel exclusively for staff and postgraduate students, conference room, canteen/refreshments, Television lounge (relaxation room), conveniences, etc.`,
    },
    {
      id: "annex-library",
      title: "ANNEX LIBRARY (TAKE-OFF SITE LIBRARY)",
      image: TakeOffLibrary,
      description: `The Annex Library is located at the Take-Off Site 
                    Campus. It serves as a reference library and provides 
                    extension services to staff and students as well as the 
                    School of Basic Studies that are situated there. The 
                    Library contains essential textbooks and journals 
                    related to all the academic programmes of the University, 
                    in addition to other materials for general reading/light 
                    reading. All materials in the Library are for use within the 
                    Library only. Borrowing outside the Library is not 
                    allowed, except on special request and approved by the 
                    University Librarian. Other facilities available include 
                    computers, Internet, photocopying services, 
                    canteen/refreshments, and TV lounge. The Library 
                    operates the same service hours as the Main Library. All 
                    inquiries/issues pertaining to the services of the Library 
                    are referred to the Branch Librarian or the staff on duty.`,
    },
    {
      id: "nursing-library",
      title: "PRE-CLINICAL & NURSING LIBRARY (AMANAWA CAMPUS)",
      image: CollegeLibrary,
      description: `This special Library is located at the Amanawa Campus; 
                    and it specifically serves the Department of Nursing and 
                    other departments in the College of Health Sciences. 
                    However, staff and students from other faculties in the 
                    University may also use the Library. The Library holds 
                    mainly medical books and journals both in physical and 
                    electronic formats. It is equipped with computers, 
                    Internet and photocopying services.`,
    },
    {
      id: "clinical-library",
      title: "CLINICAL LIBRARY (FEDERAL UNIVERSITY TEACHING HOSPITAL)",
      image: CollegeLibrary,
      description: `The Clinical Library is located at the Federal University 
                    Teaching Hospital, serving the staff and students of the 
                    College of Health Sciences as well as the doctors in the 
                    hospital. It contains medical books, journals and other 
                    materials both in physical and electronic formats. In 
                    order to facilitate access to the electronic resources and 
                    databases, the Library is equipped with computers and 
                    Internet.`,
    },
  ];

  return (
    <div className="text-gray-800 mt-20 px-4 lg:px-24 scroll-smooth">
      {/* Title */}
      <h1 className="font-bold text-3xl md:text-4xl text-center text-blue-800 mb-12">
        THE MAIN LIBRARY AND ITS BRANCHES
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        {branches.map((branch, index) => (
          <SwiperSlide
            key={index}
            id={branch.id}
            className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform scroll-mt-32"
          >
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
              {branch.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {branch.description}
            </p>
            <img
              src={branch.image}
              alt={branch.title}
              className="rounded-lg w-full h-auto max-h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Clickable Library Sections */}
      <section className="space-y-10 mb-10">
        {branches.map((branch, i) => (
          <a
            key={i}
            href={`#${branch.id}`}
            className="block bg-white border-l-4 border-blue-600 pl-4 py-4 shadow-md rounded hover:bg-blue-50 transition-colors duration-200"
          >
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2 underline">
              {branch.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {branch.description}
            </p>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Branches;
