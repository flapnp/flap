import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                // Make a request to your logout endpoint
                await axios.get("http://localhost:3001/logout");
                // Redirect to home page after successful logout
                navigate("/");
            } catch (error) {
                console.error("Logout error:", error);
                // Handle logout error as needed
            }
        };

        logout(); // Call logout function when component mounts
    }, [navigate]); // Include navigate in the dependency array

    return <></>; // Optional message while logging out
};

export default Logout;
