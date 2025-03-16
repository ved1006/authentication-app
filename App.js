import logo from './logo.svg';
import './App.css';
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import ChangePassword  from "./ChangePassword";
import About from "./About";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Doubt from "./Doubt";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={ <SignUp/> } />
        <Route path="/login"   element={ <Login/> }  />
        <Route path="/about"  element={ <About/> }  />
        <Route path="/home" element={<Home/>} />
        <Route path="fp"    element= { <ForgotPassword/>} />
        <Route path="cp"    element={ <ChangePassword/> } />
        <Route path="doubt" element={<Doubt/>} />
        <Route path="*"   element={ <SignUp/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
