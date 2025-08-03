import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/fubk-logo.jpg";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../authentication/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const { user } = useContext(AuthContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (menu) =>
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  const closeMenus = () => {
    setOpenSubmenu(null);
    setIsMenuOpen(false);
  };
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      link: "About the Library⬇️",
      path: "/about",
      submenu: [
        { sublink: "Welcome Note by UL", subpath: "/welcomeNote" },
        { sublink: "History", subpath: "/History" },
        { sublink: "Mission & Vision", subpath: "/MissionVision" },
        { sublink: "Facilities", subpath: "/Facilities" },
        { sublink: "Contact Us", subpath: "/ContactUS" },
      ],
    },
    {
      link: "Resources⬇️",
      path: "",
      submenu: [
        { sublink: "Fubk AI I Know Everything", subpath: "/fubkAiChat" },
        { sublink: "TERAS", subpath: "https://teras.ng/" },
        { sublink: "Subscription Database", subpath: "/subscription-database" },
        { sublink: "Free Resources", subpath: "/free-resources" },
      ],
    },
    { link: "SECTIONS/UNITS", path: "/SECTIONS-UNITS" },
    { link: "Branches", path: "/branches" },
    { link: "Services", path: "/services" },
    {
      link: "Help⬇️",
      path: "",
      submenu: [
        { sublink: "Fubk AI Librarian", subpath: "/fubkChatBot" },
        { sublink: "Rules & Regulation", subpath: "/help" },
      ],
    },
    { link: "Library Membership", path: "/Library-Membership" },
    { link: "News & Events", path: "/Event" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50">
      <nav
        className={`py-4 lg:px-18 px-5 ${
          isSticky ? "sticky top-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base py-0 gap-5 rounded bg-sky-600">
          <Link
            to="/"
            className="flex items-center gap-4 text-2xl font-bold text-black-500"
          >
            <img
              src={Logo}
              alt="logo"
              className="inline-block w-20 rounded mx-2"
            />
            <span className="text-white font-custom">
              FEDERAL UNIVERSITY BIRNIN KEBBI,
              <br />
              LIBRARY COMPLEX
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="md:flex space-x-12 hidden items-center">
            {navItems.map(({ link, path, submenu }) => (
              <li key={path} className="relative">
                {submenu ? (
                  <>
                    <span
                      onClick={() => toggleSubmenu(link)}
                      className="block text-base text-white uppercase cursor-pointer hover:bg-blue-500 hover:text-black transition-colors duration-300 font-custom"
                    >
                      {link}
                    </span>
                    {openSubmenu === link && (
                      <ul className="absolute top-full left-0 mt-2 space-y-2 bg-blue-500 p-2 z-40">
                        {submenu.map(({ sublink, subpath }) => (
                          <li key={subpath}>
                            <Link
                              to={subpath}
                              onClick={closeMenus}
                              className="block text-base text-white uppercase cursor-pointer hover:bg-blue-400 hover:text-black transition-colors duration-300 font-custom"
                            >
                              {sublink}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={path}
                    onClick={closeMenus}
                    className="block text-base text-white uppercase cursor-pointer hover:bg-blue-500 hover:text-black transition-colors duration-300 font-custom"
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}

            {/* Profile Image or Login */}
            <li className="flex items-center">
              {user?.profilePicture ? (
                <Link to="/profile" title="View Profile">
                  <img
                    src={user.profilePicture}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              ) : (
                <Link
                  to="/admin/dashboard"
                  className="block text-base text-white uppercase cursor-pointer hover:bg-blue-500 hover:text-black transition-colors duration-300 font-custom"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-white hover:text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-white hover:text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`space-y-4 px-5 mt-40 py-3 bg-blue-500 ${
            isMenuOpen
              ? "block fixed top-0 right-0 left-0 w-full z-40"
              : "hidden"
          }`}
        >
          {navItems.map(({ link, path, submenu }) => (
            <div key={path}>
              <span
                onClick={() =>
                  submenu ? toggleSubmenu(link) : handleMobileLinkClick()
                }
                className="block text-base text-white uppercase cursor-pointer hover:bg-blue-500 hover:text-black transition-colors duration-300 font-custom"
              >
                {link}
              </span>
              {submenu && openSubmenu === link && (
                <ul className="ml-4 space-y-2 bg-blue-500 p-2">
                  {submenu.map(({ sublink, subpath }) => (
                    <li key={subpath}>
                      <Link
                        to={subpath}
                        onClick={handleMobileLinkClick}
                        className="block text-base text-white uppercase cursor-pointer hover:bg-blue-400 hover:text-black transition-colors duration-300 font-custom"
                      >
                        {sublink}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Mobile: Profile Picture or Login */}
          <div className="flex items-center gap-4 pt-3">
            {user?.profilePicture ? (
              <Link
                to="/profile"
                onClick={handleMobileLinkClick}
                title="View Profile"
              >
                <img
                  src={user.profilePicture}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white hover:scale-105 transition-transform duration-200"
                />
              </Link>
            ) : (
              <Link
                to="/admin/dashboard"
                onClick={handleMobileLinkClick}
                className="text-white font-semibold uppercase"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
