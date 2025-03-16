import NavBar from "./NavBar";
import { useState,useRef,useEffect } from "react";
import app from "./Firebase";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer,toast } from "react-toastify";

export default function SignUp()
{
    const nav = useNavigate();

    useEffect( () => {
        let un = localStorage.getItem("un");
        if(un!==null)
            nav("/home");
    }, []);

    const rUsername = useRef();
    const rPassword1 = useRef();
    const rPassword2 = useRef();

    const [username,setUsername] = useState("");
    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("");
    const [msg,setMsg]=useState("");

    const hUsername = (event) => { setUsername(event.target.value); }
    const hPassword1 = (event) => { setPassword1(event.target.value); }
    const hPassword2 = (event) => { setPassword2(event.target.value); }

    const save = (event) => {
        event.preventDefault();
        if(username==="")
        {
            toast.error("Please enter the Email", { autoClose:2000 });
            rUsername.current.focus();
            return;
        }

        if(password1==="")
        {
            toast.error("Please enter the Password", { autoClose:2000 });
            rPassword1.current.focus();
            return;
        }

        if(password2==="")
        {
            toast.error("Please re-enter the password", { autoClose:2000 });
            rPassword2.current.focus();
            return;
        }

        if(password1===password2)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,username,password1)
            .then(res => {
                nav("/login");
            })
            .catch(err=>{
                setMsg("Issue is: " + err);
                toast.error("there is a problem", { autoClose:2000 });
            });
        }
        else{
            toast.error("Passwords did not match",{ autoClose:2000});
            setPassword1("");
            setPassword2("");
            rPassword1.current.focus();
        }
    }

    return(
        <>
        <center>
            <ToastContainer/>
            <NavBar/>                       
            <h1>SignUp Page</h1>
            <form onSubmit = { save }>
                <input type="email" placeholder="Enter the email"   ref= { rUsername }  value={username}
                onChange={hUsername}    />
                <br/><br/>
                <input type="password"  placeholder="Enter the password"    ref={rPassword1}    
                value={password1}   onChange={hPassword1}/>
                <br/><br/>
                <input type="password"  placeholder="Enter the password again"    ref={rPassword2}    
                value={password2}   onChange={hPassword2}/>
                <br/><br/>
                <input type="submit"    value="Register"   />
            </form>
            <h2>{ msg }</h2>
        </center>
        </>
    );
}