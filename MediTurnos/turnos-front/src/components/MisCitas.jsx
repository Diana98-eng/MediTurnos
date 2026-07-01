import { useEffect, useState } from "react";
import "../pages/StyleMisCitas.css";

function MisCitas() {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    fetch(
      "https://localhost:7067/api/Appointments/appointments"
    )
      .then(res => res.json())
      .then(data => setCitas(data));
  }, []);
  return (
    <div className="miscitas-container">
      <h1>Mis Citas</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Paciente</th>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {citas.map(cita => (
            <tr key={cita.idCita}>
              <td>{cita.idCita}</td>
              <td>{cita.idPaciente}</td>
              <td>{cita.idDoctor}</td>
              <td>{new Date(cita.fecha).toLocaleDateString()}</td>
              <td>{cita.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MisCitas;