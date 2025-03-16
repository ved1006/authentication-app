import NavBar from "./NavBar";
import { useState,useRef,useEffect } from "react";
import app from "./Firebase";
import { getAuth,updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer,toast } from "react-toastify";

export default function ChangePassword()
{
    const nav = useNavigate();

    useEffect( () => {
        let un = localStorage.getItem("un");
        if (un===null)
            nav("/");
    }, []);

    const rPassword1= useRef();
    const rPassword2 = useRef();

    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("");
    const [ msg,setMsg] = useState("");
    
    const hPassword1 = (event) => { setPassword1(event.target.value); }
    const hPassword2 = (event) => { setPassword2(event.target.value); }

    const save = (event) => {
        event.preventDefault();

        if(password1===password2)
        {
            const auth=getAuth();
            const user = auth.currentUser;
            updatePassword(user,password1)
            .then(res => {
                localStorage.removeItem("un");
                nav("/login");
            })
            .catch(err => {
                setMsg("issue" + err);
            });
        }

        else{
            toast.error("The passwords do not match", { autoClose:2000 });
            setPassword1("");
            setPassword2("");
            setMsg("");
            rPassword1.current.focus();
        }
    }
    
    return(
    <>
    <center>
    <h1>Change Password</h1>
        <ToastContainer/>
        <NavBar/>
            <form onSubmit ={ save } >
                <input type="password"  placeholder="enter the password"    ref= { rPassword1 } 
                onChange={ hPassword1 }     value={ password1 } />
                <br/><br/>
                <input type="password"  placeholder="Re-enter the password"   ref={ rPassword2 }    
                onChange={ hPassword2  }     value= { password2 } />
                <br/><br/>
                <input type="submit"    value="Register" />
                </form>
                <h2>{msg}</h2>
    </center>
    </>
    );
}