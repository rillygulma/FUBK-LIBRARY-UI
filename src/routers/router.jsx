import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Staffs from "../staffs/Staffs";
import Branches from "../components/branches/Branches";
import Help from "../components/Help";
import Services from "../components/Services";
import AllBooks from "../components/AllBooks";
import AdminDashboard from "../dashboard/AdminDashboard";
import Dashboard from "../dashboard/Dashboard";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import FreeResources from "../components/e-books/FreeResources";
import SubscriptionDatabase from "../components/e-books/SubscriptionDatabase";
import Journals from "../components/e-books/Journals";
import WelcomeNote from "../components/WelcomeMessage";
import History from "../components/History";
import Facilities from "../components/Facilities";
import MissionVision from "../components/MissionVision";
import EventsAndGalleries from "../components/EventsAndGalleries";
import ContactUs from "../components/Contact";
import AnnouncementForm from "../components/AnnouncementForm";
import LibraryMemebership from "../components/LibraryMembership";
import FubkChatBot from "../components/FubkChatBot";
import FubkAi from "../components/FubkAi";
import EditUserForm from "@/components/EditUserForm";
import ManageUsers from "@/components/ManageUsers";
import ContactUsMessageTable from "@/components/ContactUsMessagesTable";
import UserProfile from "@/components/UserProfileDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/journals", element: <Journals /> },
      { path: "/welcomeNote", element: <WelcomeNote /> },
      { path: "/History", element: <History /> },
      { path: "/MissionVision", element: <MissionVision /> },
      { path: "/Facilities", element: <Facilities /> },
      { path: "/subscription-database", element: <SubscriptionDatabase /> },
      { path: "/free-resources", element: <FreeResources /> },
      { path: "/SECTIONS-UNITS", element: <Staffs /> },
      { path: "/allbooks", element: <AllBooks /> },
      { path: "/Branches", element: <Branches /> },
      { path: "/Library-Membership", element: <LibraryMemebership /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Event", element: <EventsAndGalleries /> },
      { path: "/help", element: <Help /> },
      { path: "/fubkChatBot", element: <FubkChatBot /> },
      { path: "/fubkAiChat", element: <FubkAi /> },
      { path: "/services", element: <Services /> },
      { path: "/messages", element: <ContactUsMessageTable /> },
      { path: "/dashboard/admin/sign-up", element: <SignUp /> },
      { path: "/profile", element: <UserProfile /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/dashboard/AnnouncementForm",
    element: (
      <PrivateRoute>
        <AnnouncementForm />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/dashboard/edituser",
    element: (
      <PrivateRoute>
        <EditUserForm />
      </PrivateRoute>
    ),
  },
  // {
  //   path: "/dashboard/admin/sign-up",
  //   element: (
  //     <PrivateRoute>
  //       <SignUp />
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: "/dashboard/admin/manageusers",
    element: (
      <PrivateRoute>
        <ManageUsers />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
]);

export default router;
