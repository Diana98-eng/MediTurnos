import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/StyleAgendarCita.css";

function AgendarCita() {

  const navigate = useNavigate();

  const [cita, setCita] = useState({
    idPaciente: "",
    idDoctor: "",
    fecha: "",
    hora: ""
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const guardarCita = async () => {

    const citaEnviar = {
      idPaciente: Number(cita.idPaciente),
      idDoctor: Number(cita.idDoctor),
      fecha: cita.fecha,
      hora: `${cita.hora}:00`,
      estado: "Pendiente"
    };

    try {

      const response = await fetch(
        "https://localhost:7067/api/Appointments/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(citaEnviar)
        }
      );

      if (!response.ok) {
        const error = await response.text();
        alert(error);
        return;
      }

      alert("Cita registrada correctamente");
      navigate("/miscitas");

    }
    catch (error) {

      alert(error.message);

    }
  };

  return (
    <div className="agendar-container">

      <div className="agendar-card">

        <h2>Agendar Cita</h2>

        <input
          type="number"
          name="idPaciente"
          placeholder="Id Paciente"
          value={cita.idPaciente}
          onChange={handleChange}
        />

        <input
          type="number"
          name="idDoctor"
          placeholder="Id Doctor"
          value={cita.idDoctor}
          onChange={handleChange}
        />

        <input
          type="date"
          name="fecha"
          value={cita.fecha}
          onChange={handleChange}
        />

        <input
          type="time"
          name="hora"
          value={cita.hora}
          onChange={handleChange}
        />

        <button onClick={guardarCita}>
          Guardar Cita
        </button>

      </div>

    </div>
  );
}

export default AgendarCita;