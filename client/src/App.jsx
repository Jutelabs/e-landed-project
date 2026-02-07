import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Properties from './pages/Properties';
import About from './pages/About';
import VerifiedCompanies from './pages/VerifiedCompanies';
import BuyerDashboard from './pages/BuyerDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import AdminDashboard from './pages/AdminDashboard';

import PatternedBackground from './components/PatternedBackground';
import PremiumFooter from './components/PremiumFooter';

function App() {
  return (
    <AuthProvider>
      <Router>
        <PatternedBackground />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/about" element={<About />} />
              <Route path="/verified-companies" element={<VerifiedCompanies />} />
              <Route path="/loading" element={<div>Loading...</div>} />
              <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
              <Route path="/dashboard/company" element={<CompanyDashboard />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <PremiumFooter />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
