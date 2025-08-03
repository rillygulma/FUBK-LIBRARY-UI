import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
  Users,
  BookOpen,
  ClipboardList,
  LogOut,
  FileText,
  UserPlus,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import FubkLogo from "../assets/fubk-logo.jpg";
// ================= Sidebar =================
const Sidebar = ({ open, onLogout }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchUnreadMessages = async () => {
      try {
        const res = await axios.get(
          "https://fubk-library-backend-server.onrender.com/api/contact/unread-count"
        );
        setUnreadCount(res.data.unreadCount || 0);
      } catch (error) {
        console.error("Failed to fetch unread messages count", error);
      }
    };

    fetchUnreadMessages();
  }, []);

  const navItems = [
    {
      name: "Messages",
      icon: (
        <div className="relative">
          <MessageCircle className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
              {unreadCount}
            </span>
          )}
        </div>
      ),
      path: "/messages",
    },
    {
      name: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      name: "Members",
      icon: <Users className="w-5 h-5" />,
      path: "/dashboard/admin/manageusers",
    },
    {
      name: "Books",
      icon: <BookOpen className="w-5 h-5" />,
      path: "/dashboard/books",
    },
    {
      name: "Borrowed",
      icon: <ClipboardList className="w-5 h-5" />,
      path: "/dashboard/borrowed",
    },
    {
      name: "Reports",
      icon: <FileText className="w-5 h-5" />,
      path: "/dashboard/reports",
    },
    {
      name: "Add User",
      icon: <UserPlus className="w-5 h-5" />,
      path: "/dashboard/admin/sign-up",
    },
    {
      name: "Add Announcement",
      icon: <Megaphone className="w-5 h-5" />,
      path: "/admin/dashboard/AnnouncementForm",
    },
  ];

  return (
    <aside
      className={`bg-gradient-to-b from-blue-800 to-blue-600 text-white w-64 h-full z-20 shadow-lg lg:static fixed transition-transform duration-300 ${
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
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className="flex items-center gap-3 w-full text-left px-4 py-2 rounded text-sm transition-all duration-200 hover:bg-blue-700 hover:text-white text-black md:text-white"
          >
            {item.icon}
            <span className="text-black md:text-white">{item.name}</span>
          </Link>
        ))}
        <button
          onClick={onLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-2 mt-6 rounded text-sm transition-all duration-200 hover:bg-red-600 hover:text-white text-black md:text-red-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-black md:text-red-200">Logout</span>
        </button>
      </nav>
    </aside>
  );
};


Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

// ================= Topbar =================
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

// ================= Cards =================
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

// ================= Dashboard =================
export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [memberData, setMemberData] = useState([]);
  const [totalStaff, setTotalStaff] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const { user, logout } = useContext(AuthContext);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const fetchMemberStats = async () => {
      try {
        const res = await axios.get(
          "https://fubk-library-backend-server.onrender.com/api/users/member-stats"
        );
        const { staff, students } = res.data;

        setMemberData([
          { type: "Staff", male: staff.male, female: staff.female },
          { type: "Student", male: students.male, female: students.female },
        ]);
        setTotalStaff(staff.male + staff.female);
        setTotalStudents(students.male + students.female);
      } catch (error) {
        console.error("Failed to load member stats", error);
      }
    };

    fetchMemberStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar open={sidebarOpen} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col">
        <Topbar toggle={toggleSidebar} user={user} />
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-xl">
            <CardHeader>Total Books</CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-800">8,850</p>
              <span className="text-sm text-gray-500">
                Available across all categories
              </span>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl">
            <CardHeader>Total Journals</CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-800">3,150</p>
              <span className="text-sm text-gray-500">
                Digital & Printed Editions
              </span>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl">
            <CardHeader>Registered Members</CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-800">
                {totalStaff + totalStudents}
              </p>
              <div className="mt-2 text-sm text-gray-600">
                Staff: {totalStaff} <br />
                Students: {totalStudents}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 sm:col-span-2 xl:col-span-3 shadow-md hover:shadow-xl">
            <CardHeader>Members Breakdown by Gender</CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={memberData}>
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="male" fill="#3B82F6" name="Male" />
                  <Bar dataKey="female" fill="#F472B6" name="Female" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
