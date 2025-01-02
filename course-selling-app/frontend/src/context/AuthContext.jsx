import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../utils/api";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Stores user data
    const [isLoading, setIsLoading] = useState(false); // Tracks loading state
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            // Optional: Fetch user info from /me endpoint (if backend supports it)
            api.get("/users/me")
                .then((response) => {
                    setUser(response.data.user);
                })
                .catch(() => {
                    localStorage.removeItem("token"); // Clear invalid token
                    setUser(null);
                });
        }
    }, []);


    const login = (token, user) => {
        localStorage.setItem("token", token);
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        delete api.defaults.headers.common["Authorization"];
    };




    return (
        <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading, error, setError, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

