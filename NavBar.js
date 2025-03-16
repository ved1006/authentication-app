import { Link } from "react-router-dom";
import { useState,useRef,useEffect } from "react";

export default function NavBar()
{
    const[username,setUsername] = useState(null);

    useEffect( () => {
        const un = localStorage.getItem("un");
        if(un !== null)
        {
            setUsername(un);
        } 
    },[])

    return(
    <div className ="nav">
        { (username===null) && (<Link to="/"> SignUp </Link> )}
        { (username===null) && (<Link to="/login">Login</Link> )}
        { (username===null) && (<Link to="/fp"> ForgotPassword</Link>)}
        
        { (username!==null) && (<Link to="/home"> Home </Link> )}
        { (username!==null) && (<Link to="/about">About</Link> )}
        { (username!==null) && (<Link to="/cp"> ChangePassword</Link>)}
        { (username!==null) && (<Link to="/doubt">Doubt</Link>)}

    </div>
    );
}