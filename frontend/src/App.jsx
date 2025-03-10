import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FetchingPage from "./pages/FetchingPage"
import PetcamPage from "./pages/PetcamPage"
import GalleryPage from "./pages/GalleryPage"
import UserPage from "./pages/UserPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassword from '../src/components/auth/ForgotPassword';
import ResetPassword from '../src/components/auth/ResetPassword';

function App() {
    return (
        <div className='font-montserrat'>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/fetching-page" element={<FetchingPage />} />
                    <Route path="/petcam-page" element={<PetcamPage />} />
                    <Route path="/gallery-page" element={<GalleryPage />} />
                    <Route path="/account" element={<UserPage />} />
                    <Route path="/dashboard-page" element={<DashboardPage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
