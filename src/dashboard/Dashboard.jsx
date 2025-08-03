import { useContext, useState } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  ClipboardList,
  LogOut,
  UserCircle,
} from "lucide-react";
import FubkLogo from "../assets/fubk-logo.jpg";

// Sidebar for Users
const Sidebar = ({ open, onLogout }) => {
  const navItems = [
    { name: "Dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Books", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Borrowed Books", icon: <ClipboardList className="w-5 h-5" /> },
    { name: "My Profile", icon: <UserCircle className="w-5 h-5" /> },
  ];

  return (
    <aside
      className={`bg-white w-64 h-full z-20 shadow-lg lg:static fixed transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex items-center gap-3 p-6 border-b border-blue-500">
        <img
          src={FubkLogo}
          alt="FUBK Logo"
          className="w-12 h-12 rounded-md object-contain"
        />
        <span className="text-xl font-bold tracking-wide hidden md:inline">
          FUBK Library
        </span>
        {/* Show on small screens only */}
        <span className="text-lg font-semibold text-black md:hidden">
          FUBK LIBRARY
        </span>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item, i) => (
          <button
            key={i}
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-800 rounded text-sm transition-all duration-200"
          >
            {item.icon}
            <span className="hidden md:inline">{item.name}</span>
            <span className="inline md:hidden text-black">{item.name}</span>
          </button>
        ))}
        <button
          onClick={onLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-2 mt-6 text-red-600 hover:bg-red-100 hover:text-red-800 rounded text-sm transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden md:inline">Logout</span>
          <span className="inline md:hidden text-red-600">Logout</span>
        </button>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

// Topbar
const Topbar = ({ toggle, user }) => {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4">
      <button onClick={toggle} className="lg:hidden text-blue-800">
        ☰
      </button>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 font-medium hidden sm:block">
          Welcome, {user?.fullName || "Guest"}
        </span>
        <img
          src={user?.profilePicture || "/default-avatar.png"}
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
          alt="User avatar"
        />
      </div>
    </header>
  );
};

Topbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profilePicture: PropTypes.string,
  }),
};

// Card Components
const Card = ({ children, className }) => (
  <motion.div
    className={`bg-white rounded-xl p-6 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const CardHeader = ({ children, className }) => (
  <h2 className={`mb-2 text-blue-800 font-semibold text-lg ${className}`}>
    {children}
  </h2>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const CardContent = ({ children }) => <div>{children}</div>;

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

// Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar open={sidebarOpen} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col">
        <Topbar toggle={toggleSidebar} user={user} />
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-xl">
            <CardHeader>Your Borrowed Books</CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-800">5</p>
              <span className="text-sm text-gray-500">
                Books currently borrowed
              </span>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl">
            <CardHeader>Returned Books</CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-800">12</p>
              <span className="text-sm text-gray-500">Books returned</span>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl">
            <CardHeader>Books Available</CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-800">10,240</p>
              <span className="text-sm text-gray-500">Available to borrow</span>
            </CardContent>
          </Card>

          <Card className="col-span-1 sm:col-span-2 xl:col-span-3 shadow-md hover:shadow-xl">
            <CardHeader>Borrowing Summary</CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    { label: "Borrowed", count: 5 },
                    { label: "Returned", count: 12 },
                    { label: "Available", count: 10240 },
                  ]}
                >
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
