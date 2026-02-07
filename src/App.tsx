import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Force rebuild
import LandingPage from './pages/LandingPage'
import AuthLayout from './pages/auth/AuthLayout'
import LoginForm from './pages/auth/LoginForm'
import SignUpForm from './pages/auth/SignUpForm'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import FindDoctors from './pages/dashboard/FindDoctors'
import DoctorProfile from './pages/dashboard/DoctorProfile'
import Appointments from './pages/dashboard/Appointments'
import DoctorDashboardLayout from './pages/doctor/DoctorDashboardLayout'
import DoctorDashboard from './pages/doctor/DoctorDashboard'
import MyPatients from './pages/doctor/MyPatients'
import ScheduleManagement from './pages/doctor/ScheduleManagement'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Route>

        {/* General Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="find-doctors" element={<FindDoctors />} />
          <Route path="doctor/:id" element={<DoctorProfile />} />
          <Route path="appointments" element={<Appointments />} />
        </Route>

        {/* Doctor Portal Routes (Keep separate or merge? User said 'common', but Doctor Portal has specific layout. Leaving separate for now unless asked) */}
        <Route path="/doctor" element={<DoctorDashboardLayout />}>
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="patients" element={<MyPatients />} />
          <Route path="schedule" element={<ScheduleManagement />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
