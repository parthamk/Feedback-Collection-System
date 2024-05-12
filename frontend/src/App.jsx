import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import RequireAuth from "./components/RequireAuth"; // Import the RequireAuth component
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import ThankYou from "./components/ThankYou.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/form" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
