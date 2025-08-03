import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/footer/MyFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        {/* ✅ Toastify Container with custom options */}
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" // or "light", "dark"
          toastStyle={{
            background: "#333",
            color: "#fff",
            fontSize: "14px",
            padding: "12px 20px",
          }}
          limit={3} // optional: limits number of concurrent toasts
        />
        <Outlet />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
