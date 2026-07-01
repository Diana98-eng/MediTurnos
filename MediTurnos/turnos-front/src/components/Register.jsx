import "../pages/StyleRegister.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="re-container">
      <div className="register-card">
        <h2>CREAR CUENTA </h2>
        <p>Completa tus datos para registrarte en MediTurnos.</p>
        <form className="register-form">
          <input type="text" placeholder="Nombre completo" 
            placeholder="Nombre completo"
          />
          <input type="email" placeholder="Correo electrónico"
            placeholder="Correo electrónico"
          />
          <input type="password" placeholder="Contraseña"
            placeholder="Contraseña"
          />
          <input type="password" placeholder="Confirmar contraseña"
            placeholder="Confirmar contraseña"
          />
          <button asp-action="Register" asp-controller="Usuario" method="post" type="submit">Registrarse</button>
          <Link to="/" className="back-arrow"> ← Volver </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;