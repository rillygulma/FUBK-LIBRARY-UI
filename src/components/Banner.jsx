import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerCard from "./bannerCard/BannerCard";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to 👋",
      "Federal University Birnin Kebbi,",
      "Library Complex.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
  const fetchAnnouncement = async () => {
    try {
      const res = await axios.get("https://fubk-library-backend-server.onrender.com/api/announcements/allAnnouncement");
      if (Array.isArray(res.data) && res.data.length > 0) {
        setAnnouncement(res.data[0]); 
        setShowPopup(true); 
      }
    } catch (error) {
      console.error("Failed to fetch announcement:", error.message);
    }
  };

  fetchAnnouncement();
}, []);


  return (
    <div className="relative px-4 sm:px-6 lg:px-24 bg-teal-100 flex items-center min-h-screen">
      {/* News Popup */}
      {showPopup && announcement && (
        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 bg-white border border-blue-300 shadow-lg rounded-md p-5 z-50 w-full max-w-md">
          <h3 className="text-lg font-bold text-blue-600 mb-2">
            📢 {announcement.title}
          </h3>
          <p className="text-gray-700 mb-2">{announcement.message}</p>
          <p className="text-sm italic text-gray-500 text-right">
            - {announcement.createdBy || "University Librarian"}
          </p>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Close
          </button>
        </div>
      )}

      {/* Main Banner Section */}
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-4xl text-blue-600 uppercase font-bold font-custom">
            <span>{text}</span>
          </h2>
          <p className="md:w-4/5 text-xl font-custom">
            Federal University Birnin Kebbi Library was established in 2013 to
            support the University in achieving its goals of teaching, learning,
            and research. In line with this, the University library acquires,
            organizes, and disseminates information in both printed and
            electronic format to its users.
          </p>

          <Link to="/welcomeNote">
            <button className="bg-blue-600 mt-5 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Read the University Librarian Welcome Note
            </button>
          </Link>

          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Right Side Banner */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
