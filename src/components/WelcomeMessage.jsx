import UL from "../assets/UL.jpg";

const WelcomeMessage = () => {
  return (
    <div className="text-center mt-10 px-3 sm:px-4 md:px-8 lg:px-24 py-6 sm:py-8 bg-gray-300 rounded-lg shadow-lg">
      <h1 className="text-xl sm:text-2xl mt-10 md:text-3xl font-extrabold text-blue-600 mb-2">
        Welcome to Our Library
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-4">
        By The University Librarian
      </h2>

      <img
        src={UL}
        alt="Library"
        className="object-cover w-full max-w-[90%] sm:max-w-sm md:max-w-md mx-auto rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
      />

      <p className="text-gray-700 text-sm sm:text-base mt-6 mb-4 leading-relaxed">
        It is my great pleasure to welcome you to Federal University Birnin
        Kebbi Library Complex (FUBKLC). The Library is committed to supporting
        the overall vision and mission of Federal University Birnin Kebbi. Our
        commitment is demonstrated through the provision of relevant information
        resources geared towards achieving the mandate of the University in
        general. Similarly, it is part of the mission of the library to make the
        local content of the University visible globally.
      </p>

      <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
        The Library’s collections are aligned with all programs offered at both
        Undergraduate and Postgraduate levels. Meeting the information needs of
        researchers is also a priority for FUBKLC. The University Library is
        known for providing uninterrupted Internet connectivity to access
        various e-resources, e-Theses and Dissertations, e-services, and
        collaboration with researchers globally.
      </p>

      <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
        Our well-trained staff members are pleased to offer their expertise in
        answering your queries related to your academic activities. We look
        forward to serving you and welcoming your comments and suggestions.
      </p>

      <p className="font-semibold italic text-gray-800 text-sm sm:text-base">
        Regards,
        <br />
        Prof. Ahmad Audu Balarabe CLN, FNLA
      </p>
    </div>
  );
};

export default WelcomeMessage;
