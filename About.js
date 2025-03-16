import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un !== null) {
            setUsername(un);
        } else {
            nav("/login");
        }
    }, []);

    return (
        <>
        <center>
            <NavBar />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f9f9f9"
            }}>
                <div style={{
                    backgroundColor: "#ffffff",
                    padding: "2rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    maxWidth: "500px",
                    width: "100%",
                    textAlign: "center"
                }}>
                    <h1 style={{
                        fontSize: "2rem",
                        color: "#333",
                        marginBottom: "1rem"
                    }}>About Me</h1>
                    <p style={{
                        fontSize: "1.1rem",
                        color: "#555",
                        lineHeight: "1.6",
                        marginBottom: "1rem"
                    }}>
                        Hi, I'm <b>Ved Dange</b>, a passionate software developer with a love for building innovative and scalable web applications.
                        I'm experienced in <b>React, Node.js, Java, and MySQL</b>, and I enjoy solving complex problems.
                    </p>
                    <p style={{
                        fontSize: "1.1rem",
                        color: "#555",
                        lineHeight: "1.6"
                    }}>
                        Currently pursuing my degree in <b>Computer Engineering</b>, I'm actively involved in hackathons and competitive programming to sharpen my skills.
                    </p>
                </div>
            </div>
            </center>
        </>
    );
}
