import "../pages/StyleLongi.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const iniciarSesion = (e) => {e.preventDefault();navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bienvenido De Nuevo </h2>
        <p>Ingresa tus datos para acceder a tu cuenta.</p>

        <form className="login-form" onSubmit={iniciarSesion}>

          <input
            type="email"
            placeholder="Correo electrónico"/>
          <input
            type="password"
            placeholder="Contraseña"/>
          <button type="submit">Iniciar Sesión</button>

          <Link to="/" className="back-arrow">← Volver</Link>

        </form>
      </div>
    </div>
  );
}

export default Login;

