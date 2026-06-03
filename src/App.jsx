import { useState } from "react";
import Home from "./pages/Home";
import HireDevelopers from "./pages/Hiredevelopers";
import Technologies from "./pages/Technologies";
import HowItWorks from "./pages/Howitworks";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AdminLogin from "./pages/Adminloogin";
import AdminDashboard from "./pages/Admindashboard";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [adminAuthed, setAdminAuthed] = useState(
    () => sessionStorage.getItem("hr_admin_auth") === "1"
  );

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Admin flow ──────────────────────────────────────────────────────────
  // If the current page is "admin-login" → show login screen (no navbar/footer)
  if (currentPage === "admin-login") {
    if (adminAuthed) {
      // Already logged in — go straight to dashboard
      return (
        <AdminDashboard
          onLogout={() => {
            setAdminAuthed(false);
            navigate("admin-login");
          }}
        />
      );
    }
    return (
      <AdminLogin
        onLogin={() => {
          setAdminAuthed(true);
          // stays on "admin-login" page id, but now adminAuthed=true
          // so re-render will show dashboard
        }}
      />
    );
  }

  // If already authed and somehow lands on "admin" shortcut
  if (currentPage === "admin") {
    if (adminAuthed) {
      return (
        <AdminDashboard
          onLogout={() => {
            setAdminAuthed(false);
            navigate("home");
          }}
        />
      );
    }
    navigate("admin-login");
    return null;
  }

  // ── Public site ─────────────────────────────────────────────────────────
  const renderPage = () => {
    switch (currentPage) {
      case "home":         return <Home navigate={navigate} />;
      case "about":        return <About navigate={navigate} />;
      case "hire":         return <HireDevelopers navigate={navigate} />;
      case "technologies": return <Technologies navigate={navigate} />;
      case "how":          return <HowItWorks navigate={navigate} />;
      case "contact":      return <Contact navigate={navigate} />;
      default:             return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}