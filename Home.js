import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un !== null) setUsername(un);
        else nav("/login");
    }, []);

    const lo = (event) => {
        event.preventDefault();
        localStorage.removeItem("un");
        nav("/login");
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        else if (hour < 18) return "Good Afternoon";
        else return "Good Evening";
    };

    return (
        <>
        <center>
            <NavBar />
            <center>
                <h1>Home Page</h1>
                <h2>{getGreeting()}, {username}!</h2>
                
             
                <div style={{
                    backgroundColor: "#f9f9f9",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    marginTop: "2rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    textAlign: "left",
                    maxWidth: "700px"
                }}>
                    <h3 style={{ color: "#0095f6", marginBottom: "1rem" }}>About This Project</h3>
                    <p style={{
                        fontSize: "1.1rem",
                        color: "#555",
                        lineHeight: "1.6"
                    }}>
                        This project is a fully functional authentication system built using React.js and Firebase. 
                        It allows users to securely create an account, log in, change passwords, and reset forgotten passwords.
                    </p>

                    <ul style={{
                        paddingLeft: "20px",
                        fontSize: "1.1rem",
                        color: "#555",
                        lineHeight: "1.6"
                    }}>
                        <li><b>Sign Up:</b> Users can create an account by providing their email and password.</li>
                        <li><b>Login:</b> Users can log in using their registered email and password.</li>
                        <li><b>Change Password:</b> Logged-in users can securely update their password.</li>
                        <li><b>Forgot Password:</b> Users can reset their password by receiving a reset link through email.</li>
                        <li><b>Firebase Integration:</b> The authentication system is powered by Firebase for secure handling of user data and password encryption.</li>
                        <li><b>Email Verification:</b> Firebase ensures that the email entered is valid and unique. It also manages secure email-based password recovery.</li>
                        <li><b>Doubt Section:</b> Users can submit their doubts or questions which will be sent on the emailID of admin.</li>
                        <li><b>Reply to Doubts:</b> An admin or authorized user can respond to submitted doubts, providing solutions directly within the platform.</li>
                        <li><b>Doubt Status Tracking:</b> Users can track the status of their submitted doubts (e.g., pending, resolved).</li>
                    </ul>

                    <p style={{
                        fontSize: "1.1rem",
                        color: "#555",
                        lineHeight: "1.6",
                        marginTop: "1rem"
                    }}>
                        
                    </p>
                </div>

                {}

                {}
                <form onSubmit={lo} style={{ marginTop: "1rem" }}>
                    <input type="submit" value="Log Out" style={{
                        padding: "10px 20px",
                        backgroundColor: "#ff4d4d",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }} />
                </form>
            </center>
                    </center>
        </>
    );
}
