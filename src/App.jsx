import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NavigationPage from "./pages/NavigationPage/NavigationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SafetyAndEmergencyPage from "./pages/SafetyAndEmergencyPage/SafetyAndEmergencyPage";
import TravellerPlannerPage from "./pages/TravellerPlannerPage/TravellerPlannerPage";
import ExpenseTrackerPage from "./pages/ExpenseTrackerPage/ExpenseTrackerPage";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/planner" element={<TravellerPlannerPage />} />
        <Route path="/safety" element={<SafetyAndEmergencyPage />} />
        <Route path="/expenses" element={<ExpenseTrackerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
