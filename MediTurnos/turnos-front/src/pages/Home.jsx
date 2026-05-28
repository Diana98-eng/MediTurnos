import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="card">

        <h1>MediTurnos</h1>

        <p>
          Gestiona tus citas médicas de forma rápida,
          segura y sencilla.
        </p>

        <div className="buttons">

          <Link to="/login">
            <button>Iniciar Sesión</button>
          </Link>

          <Link to="/register">
            <button>Registrarse</button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Home;