import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SplashScreen from "./components/SplashScreen";
import LandingGate from "./components/LandingGate";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SmartJourney from "./pages/SmartJourney";
import SeatSelection from "./pages/SeatSelection";
import PassengerDetails from "./pages/PassengerDetails";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

type Stage = "splash" | "gate" | "app";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [stage, setStage] = useState<Stage>("splash");

  const toggleDark = () => {
    setDarkMode((d) => !d);
    document.documentElement.classList.toggle("light");
  };

  return (
    <BrowserRouter>
      {stage === "splash" && (
        <SplashScreen onComplete={() => setStage("gate")} />
      )}
      {stage === "gate" && (
        <LandingGate onEnter={() => setStage("app")} />
      )}
      <div
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
        style={{
          opacity: stage === "app" ? 1 : 0,
          transition: "opacity 0.7s ease",
          pointerEvents: stage === "app" ? "all" : "none",
        }}
      >
        <Header darkMode={darkMode} toggleDark={toggleDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:mode" element={<SearchResults />} />
          <Route path="/smart-journey" element={<SmartJourney />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/passenger-details" element={<PassengerDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
