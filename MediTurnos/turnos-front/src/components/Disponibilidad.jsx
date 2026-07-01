import "../pages/StyleDisponibilidad.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Disponibilidad() {

  const navigate = useNavigate();

  const [profesionales, setProfesionales] = useState([]);
  const [disponibilidades, setDisponibilidades] = useState([]);

useEffect(() => {

  fetch("https://localhost:7296/api/users/profesionales")
    .then((res) => res.json())
    .then((data) => {
      console.log("Profesionales:", data);
      setProfesionales(data);
    })
    .catch((error) =>
      console.log("Error cargando profesionales:", error)
    );

  fetch("https://localhost:7067/api/Appointments/availability")
    .then((res) => res.json())
    .then((data) => {
      console.log("Disponibilidades:", data);
      setDisponibilidades(data);
    })
    .catch((error) =>
      console.log("Error cargando disponibilidades:", error)
    );

}, []);

 return (
  <div className="availability-container">

    <header className="availability-header">

      <button
        onClick={() => navigate("/dashboard")}
        className="back-btn"
      >
        ← Volver
      </button>

      <h1>Disponibilidad Médica</h1>

    </header>

    <section className="availability-intro">

      <h2>Especialistas Disponibles</h2>

      <p>
        Consulta los profesionales registrados y sus horarios de atención.
      </p>

    </section>

    <section className="availability-table-container">

      <table className="availability-table">

        <thead>
          <tr>
            <th>Profesional</th>
            <th>Especialidad</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>

          {disponibilidades.length > 0 ? (

            disponibilidades.map((dispo) => {

              const profesional = profesionales.find(
                (p) => p.idUsuario === dispo.idDoctor
              );

              return (
                <tr key={dispo.idDisponibilidad}>

                  <td>{profesional?.nombre}</td>

                  <td>
                    {profesional?.especialidad || "Sin especialidad"}
                  </td>

                  <td>
                    {new Date(dispo.fecha).toLocaleDateString()}
                  </td>

                  <td>
                    {dispo.horaInicio} - {dispo.horaFin}
                  </td>

                  <td>
                    <button className="schedule-btn">
                      Agendar
                    </button>
                  </td>

                </tr>
              );
            })

          ) : (

            <tr>
              <td colSpan="5" className="empty-row">
                No hay disponibilidades registradas
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </section>

  </div>
);
}

export default Disponibilidad;