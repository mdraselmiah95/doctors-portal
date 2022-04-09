import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import AddDoctor from "./pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./pages/Dashboard/Payment/Payment";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/LogIn/AdminRoute/AdminRoute";
import LogIn from "./pages/LogIn/LogIn/LogIn";
import PrivateRoute from "./pages/LogIn/PrivateRoute/PrivateRoute";
import Register from "./pages/LogIn/Register/Register";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                exact
                path="/dashboard"
                element={<DashboardHome />}
              ></Route>
              <Route
                path={`/dashboard/payment/:appointmentId`}
                element={<Payment />}
              ></Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addDoctor`}
                element={
                  <AdminRoute>
                    <AddDoctor></AddDoctor>
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
