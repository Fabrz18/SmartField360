import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Login() {
  const handleMainRedirect = (event) => {
    event.preventDefault();
    window.location.href = '/';
  };

  return (
    <div className="App">
      <div className="row h-100">

        {/* Formulario (lado izquierdo) */}
        <div className=" d-flex flex-column justify-content-center">
        <div id="PrincipalLoginTextBox">
          <img src="/images/logo.png" alt="Logo" className="App-logo mb-3" />
          <h2 className="mb-4">Bienvenidos, es bueno verte de nuevo.</h2>

          <form >
            {/* Usuario */}
            <label htmlFor="username" className="labelForm">
              <img src="/images/user.png" alt="User Icon" /> Usuario:
            </label>
            <input className="inputPrincipal" type="text" id="username" name="username" placeholder="Correo electrónico o nombre de usuario" required />

            {/* Contraseña */}
            <label htmlFor="password" className="labelForm">
              <img src="/images/lock.png" alt="Lock Icon" /> Contraseña:
            </label>
            <input className="inputPrincipal" type="password" id="password" name="password" placeholder="Ingrese contraseña ejm. x$3w”14Ki0" required />

            {/* Opciones extra */}
            <div id="ExtraLoginOptions">
              <section id="rememberMeSection">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="rememberMe" name="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
                </div>
              </section>
              <section id="forgotPasswordSection">
                <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
              </section>
            </div>

            {/* Botón iniciar sesión */}
            <button type="submit" id="buttonForm" className="btn btn-success mt-4" onClick={handleMainRedirect}>Iniciar sesión</button>
          </form>

          {/* Botones sociales */}
          <div className="socialLogin mt-4">
            <button className="btn btn-outline-dark d-flex align-items-center justify-content-center ">
              <img src="/images/google_ico.png" alt="" /> Iniciar sesión con Google
            </button>
            <button className="btn btn-outline-dark d-flex align-items-center justify-content-center ">
              <img src="/images/facebook_ico.png" alt="" /> Iniciar sesión con Facebook
            </button>
            <button className="btn btn-outline-dark d-flex align-items-center justify-content-center ">
              <img src="/images/outlook_ico.png" alt="" /> Iniciar sesión con Outlook
            </button>
            <button className="btn btn-outline-dark d-flex align-items-center justify-content-center ">
              <img src="/images/apple_ico.png" alt="" /> Iniciar sesión con Apple ID
            </button>
            <a href='/register' >
              O registrate con tu correo electronico
            </a>
          </div>
          
        </div>
        <footer >
          <img src="/images/loco_ico.png" alt="Arrow Icon" id='Copy' /> <p> &copy; SmartField360 - 2025</p>
        </footer>
       </div>
      
      </div>
       {/* Imagen derecha */}
        <div  id="ExtraLoginImage">
          <img src="/images/principalBackground.png" alt="Login Illustration" />
        </div>
    </div>
  );
}

export default Login;
