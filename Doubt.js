import { useState,useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer,toast } from "react-toastify";
import React from "react";
import NavBar from "./NavBar";
import app from "./Firebase";
import { useNavigate } from "react-router-dom";

export default function Doubt()
{
    const nav = useNavigate();
    
        useEffect( () => {
            let un = localStorage.getItem("un");
            if (un===null)
                nav("/");
        }, []);

    const rName = useRef();
    const rDoubt = useRef();

    const [name,setName] = useState("");
    const [doubt,setDoubt] = useState("");
    const [msg,setMsg] = useState("");

    const hName = (event) => {
        setName(event.target.value);
    }

    const hDoubt = (event) => {
        setDoubt(event.target.value);
    }

    const mail = (event) => {
        event.preventDefault();

        if(name==="")
        {
            toast.error("Please enter the name", {autoClose:2000});
            rName.current.focus();
            return;
        }

        if(doubt==="")
        {
            toast.error("Please enter the doubt", {autoClose:2000});
            rDoubt.current.focus();
            return;
        }

            let data = { name,doubt };
            emailjs.send("template_ciznsqg","template_ciznsqg",data,"TqstEdjvDei4M1t9l")
            .then(res => {
                setMsg("the doubt has been sent!!");
                setName("");
                setDoubt("");
                rName.current.focus();

            })
            .catch(err => {
                console.log(err);
                setMsg("The issue is: " + err);
    });
    }
    return(
        <>
        <center>
            <h1>Doubt</h1>
            <ToastContainer/>
            <NavBar/>
            <form onSubmit= { mail }>
                <input type="text"  placeholder="Enter the name"    ref= { rName }      value= { name }
                onChange={ hName } />
                <br/><br/>
                <textarea   placeholder="enter the query"   rows = { 3 }    cols={ 30 }     
                ref= { rDoubt }     onChange={ hDoubt }     value={ doubt } />
                <br/><br/>
                <input type="submit"    /> 
                </form>
                <h2>{ msg }</h2>
        </center>
        </>
    );
}