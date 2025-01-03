import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Purchases from "./pages/Purchases";
import NotFound from "./pages/NotFound";
import { AuthContext } from "./context/AuthContext";
import Index from "./pages/Index";

function App() {

    const { user } = useContext(AuthContext);

    return (
        <Router >
            <Routes>
                < Route path='/' element={<Index />}/>

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute >
                    }
                />

                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to="/home" />}
                />

                <Route
                    path="/signup"
                    element={!user ? <Signup /> : <Navigate to="/home" />}
                />
                
                <Route
                    path="/courses"
                    element={
                        <ProtectedRoute>
                            <Courses />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/purchases"
                    element={
                        <ProtectedRoute>
                            <Purchases />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </Router>
    );
}

export default App;
