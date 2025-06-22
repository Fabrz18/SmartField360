import React from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
function Register() {
  return (
    // <div className="container-fluid vh-100">
    //   <div className="row w-100 h-100">
    //     {/* Columna izquierda: Formulario */}
    //     <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5 bg-light">
    //       <h2 className="mb-4 text-center">Crea tu cuenta</h2>
    //       <form className="w-100" style={{ maxWidth: '400px' }}>
    //         <div className="mb-3">
    //           <label htmlFor="name" className="form-label">Nombre completo</label>
    //           <input type="text" className="form-control" id="name" required />
    //         </div>
    //         <div className="mb-3">
    //           <label htmlFor="email" className="form-label">Correo electrónico</label>
    //           <input type="email" className="form-control" id="email" required />
    //         </div>
    //         <div className="mb-3">
    //           <label htmlFor="password" className="form-label">Contraseña</label>
    //           <input type="password" className="form-control" id="password" required />
    //         </div>
    //         <div className="mb-3">
    //           <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
    //           <input type="password" className="form-control" id="confirmPassword" required />
    //         </div>
    //         <button type="submit" className="btn btn-primary w-100">Registrarse</button>
    //         <p className="mt-3 text-center">
    //           ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
    //         </p>
    //       </form>
    //     </div>

    //     {/* Columna derecha: Imagen */}
    //     <div className="col-md-6 d-none d-md-block p-0">
    //       <img
    //         src="/images/principalBackground.png"
    //         alt="Imagen registro"
    //         className="img-fluid vh-100 w-100 object-fit-cover"
    //         style={{ objectFit: 'cover' }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="App">
      <div className="row h-100">

        {/* Formulario (lado izquierdo) */}
        <div className=" d-flex flex-column justify-content-center">
        <div id="PrincipalLoginTextBox">
          <img src="/images/logo.png" alt="Logo" className="App-logo mb-3" />
          <h2 className="mb-4">Bienvenidos, es bueno verte de nuevo.</h2>

          <form >
            {/* Email */}
            <label htmlFor="username" className="labelForm">
              <img src="/images/mail.png" alt="Mail Icon" /> Correo:
            </label>
            <input className="inputPrincipal" type="text" id="mail" name="mail" placeholder="Correo electrónico o nombre de usuario" required />
            
            {/* Usuario */} 
            <label htmlFor="username" className="labelForm">
              <img src="/images/user.png" alt="User Icon" /> Nombre de Usuario:
            </label>
            <input className="inputPrincipal" type="text" id="username" name="username" placeholder="Nombre de usuario" required />

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
            </div>
            {/* Confirmar Contraseña */}
            <label htmlFor='confirmPassword' className='labelForm mt-4'>
              <img src="/images/lock.png" alt="Lock Icon" /> Confirmar Contraseña:
            </label>
            <input className="inputPrincipal" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirma tu contraseña" required />
            {/* Botón iniciar sesión */}
            <p className='labelForm '>
              Enviar o reenviar código a su correo
            </p>
            <button type="submit" id="buttonForm" className="btn btn-success mt-4">Crear Cuenta</button>
          </form>

          
          
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

export default Register;
