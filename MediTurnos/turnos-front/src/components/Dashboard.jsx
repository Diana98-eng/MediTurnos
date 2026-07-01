import "../pages/StyleDashboard.css";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

function Dashboard() {

   const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate("/");
  };

  return (
    
    <div className="dashboard-container">

      <header className="dashboard-header">
        <h1> MEDITURNOS</h1>

        <div className="user-section">
          <button onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </div>
      </header>

      <Carousel />
<br></br>
      
    <section className="welcome-section">
    <div>     
  <h2>
    Cuidando de los tuyos, con profesionales cerca de ti
  </h2>
</div>  
  <p>
    Agenda citas médicas, consulta especialistas
    disponibles y administra tu historial de forma
    rápida, segura y sencilla.
  </p>

</section> 
     
<section className="cards-container">

  <div className="card-horizontal">

    <div className="card-content">
      <h3>DISPONIBILIDAD MEDICA</h3>
      <p>Consulta horarios y doctores disponibles.</p>
      <button onClick={() => navigate("/disponibilidad")}>Ver Disponibilidad</button>
    </div>

    <div className="card-image">
      <img
        src="https://images.pexels.com/photos/8376221/pexels-photo-8376221.jpeg"
        alt="Doctor"/>
    </div>
  </div>

  <div className="card-horizontal">
    <div className="card-content">
      <h3> AGENDAR CITA</h3>
      <p>Programa una nueva cita médica.</p>
      <button onClick={() => navigate("/agendar-cita")}>Agendar</button>
    </div>

    <div className="card-image">
      <img
        src="https://images.pexels.com/photos/29509493/pexels-photo-29509493.jpeg"
        alt="Agenda"/>
    </div>

  </div>

  <div className="card-horizontal">
    <div className="card-content">
      <h3> MIS CITAS </h3>
      <p>Consulta tus citas programadas.</p>
    <button onClick={() => navigate("/miscitas")}>Ver Citas</button>
    </div>
    <div className="card-image">
      <img
        src="https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg"
        alt="Citas"/>
    </div>
  </div>
</section>

      <section className="stats-container">
        <div className="stat-card">
          <h4>📅 Próxima cita</h4>
          <p>29/05/2026</p>
        </div>

        <div className="stat-card">
          <h4>📋 Pendientes</h4>
          <p>2</p>
        </div>

        <div className="stat-card">
          <h4>👨‍⚕️ Doctores</h4>
          <p>8</p>
        </div>

      </section>

    </div>
  );
}

export default Dashboard;