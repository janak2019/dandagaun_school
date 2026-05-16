import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Public site
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />

        {/* LOGIN */}
        <Route path="/admin/login" element={<Login />} />

        {/* PROTECTED ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}