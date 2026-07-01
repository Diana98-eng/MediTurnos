import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Appointments from "./components/Appointments";
import Dashboard from "./components/Dashboard";
import Carousel from "./components/Carousel"; 
import Disponibilidad from "./components/Disponibilidad";
import AgendarCita from "./components/AgendarCita";
import MisCitas from "./components/MisCitas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Carousel" element={<Carousel/>}/>
        <Route path="/disponibilidad"element={<Disponibilidad />}/>
        <Route path="/agendar-cita"element={<AgendarCita />}/>
        <Route path="/miscitas" element={<MisCitas />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;