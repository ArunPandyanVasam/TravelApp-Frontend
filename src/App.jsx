import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import TravellerPlannerPage from "./pages/TravellerPlannerPage/TravellerPlannerPage";
import ExpenseTrackerPage from "./pages/ExpenseTrackerPage/ExpenseTrackerPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import VehicleRentOut from "./components/VehicleRentOut/VehicleRentOut";


function App() {
  return <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rent" element={<VehicleRentOut />} />
        <Route path="/planner" element={<TravellerPlannerPage />} />
        <Route path="/expenses" element={<ExpenseTrackerPage />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
}

export default App;
