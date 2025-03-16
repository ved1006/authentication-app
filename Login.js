import NavBar from "./NavBar";
import { useState,useRef,useEffect } from "react";
import app from "./Firebase";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const nav = useNavigate();
    const auth = getAuth(app);
    useEffect( () => {
        let un = localStorage.getItem("un");
        if(un !== null)
            nav("/home");
    }, []);

     const rUsername = useRef();
     const rPassword = useRef();

     const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
     const [msg,setMsg] = useState("");

     const hUsername = (event) => { setUsername(event.target.value); }
     const hPassword = (event) => { setPassword(event.target.value); }

     const save = (event) => {
            event.preventDefault();
            signInWithEmailAndPassword(auth,username,password)
            .then(res => {
                localStorage.setItem("un",username);
                nav("/home");
            })
            .catch(err => {
                setMsg("Issue is : " + err);
            });
     }

     return(
        <>
        <center>
            <NavBar/>
            <h1>Login Page</h1>
            <form onSubmit = { save } >
                <input type="email"     placeholder="Enter your email"  ref = { rUsername } 
                value= { username }     onChange = { hUsername } />
                <br/><br/>
                <input type="password"  placeholder="enter the password"    ref={ rPassword }   
                value= { password }     onChange = { hPassword } />
                <br/><br/>
                <input type="submit"    value="login"   />
            </form>
            <h2> { msg }</h2>
        </center>
        </>
     );
}
