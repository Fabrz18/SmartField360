import React from 'react';
import { useEffect } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');

  };
  useEffect(() => {
    console.log("¡SmartField360 Landing Page cargada!");

    const track = document.getElementById('sliderTrack');
    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    let currentSlide = 1;
    let isMoving = false;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const allSlides = track.children;
    const slideWidth = window.innerWidth;

    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    const handleResize = () => {
      track.style.transition = 'none';
      track.style.transform = `translateX(-${window.innerWidth * currentSlide}px)`;
    };

    window.addEventListener('resize', handleResize);

    const moveSlide = (direction) => {
      if (isMoving) return;
      isMoving = true;

      currentSlide += direction;
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${window.innerWidth * currentSlide}px)`;

      track.addEventListener('transitionend', handleLoopFix, { once: true });
    };

    const handleLoopFix = () => {
      const slideCount = allSlides.length;

      if (currentSlide === slideCount - 1) {
        track.style.transition = 'none';
        currentSlide = 1;
        track.style.transform = `translateX(-${window.innerWidth * currentSlide}px)`;
      }

      if (currentSlide === 0) {
        track.style.transition = 'none';
        currentSlide = slideCount - 2;
        track.style.transform = `translateX(-${window.innerWidth * currentSlide}px)`;
      }

      isMoving = false;
    };

    window.moveSlide = moveSlide;

    return () => {
      window.removeEventListener('resize', handleResize);
      delete window.moveSlide;
    };
  }, []);


  return (
    <div lang="es">
      {/* HEADER */}
      <header className="container-fluid d-flex justify-content-between align-items-center py-3 px-4 flex-wrap bg-white">
        <div className="logo">
          <img
            src="./images/PHOTOlogo_smartfield360_whitebg.png"
            alt="SmartField360"
            className="img-fluid"
            style={{ maxHeight: '60px' }}
          />
        </div>
        <div className="d-flex gap-4 align-items-center flex-wrap header-right">
          <nav className="d-flex gap-3">
            <a href="#servicios" className="text-dark fw-medium text-decoration-none">Servicios</a>
            <a href="#caracteristicas" className="text-dark fw-medium text-decoration-none">Características</a>
            <a href="#beneficios" className="text-dark fw-medium text-decoration-none">Beneficios</a>
            <a href="#nosotros" className="text-dark fw-medium text-decoration-none">Nosotros</a>
          </nav>
          <div className="auth-buttons d-flex gap-2">
            <button className="btn btn-success" onClick={handleLoginRedirect}>Iniciar Sesión</button>
            <button className="btn btn-success" onClick={handleRegisterRedirect}>Registrarse</button>
          </div>
        </div>
      </header>

      {/* SLIDER */}
      <section className="hero-slider position-relative">
        <div className="slider-track d-flex" id="sliderTrack" style={{ transform: 'translateX(-1024px)', transition: 'none' }}>
          <img src="./images/b4.jpg" alt="Imagen 5" />
          <img src="./images/b5.jpg" alt="Imagen 1" />
          <img src="./images/b1.jpg" alt="Imagen 2" />
          <img src="./images/b2.png" alt="Imagen 3" />
          <img src="./images/b3.jpg" alt="Imagen 4" />
          <img src="./images/b4.jpg" alt="Imagen 5" />
          <img src="./images/b5.jpg" alt="Imagen 1" />
        </div>
        <button className="nav prev" onClick={() => window.moveSlide(-1)}>❮</button>
        <button className="nav next" onClick={() => window.moveSlide(1)}>❯</button>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="container py-5">
        <h2 className="text-success mb-4 fs-2">Servicios</h2>
        <div className="row g-4 cards">
          <div className="col-md-4">
            <div className="card h-100 text-center shadow">
              <img src="./images/Antracnosis-en-plantas.jpg.png" className="card-img-top" alt="Detección de plagas" style={{ height: '230px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-success">Detector de plagas y enfermedades</h5>
                <p className="card-text">Detecta diferentes plagas y enfermedades en etapa temprana en tus cultivos.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center shadow">
              <img src="./images/Control.png" className="card-img-top" alt="Control de riego" style={{ height: '230px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-success">Administrador de recursos</h5>
                <p className="card-text">Aumenta la eficiencia de recursos y reduce el costo de producción.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center shadow">
              <img src="./images/calculadorafinanciera.png" className="card-img-top" alt="Calculadora financiera" style={{ height: '230px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-success">Calculadora financiera</h5>
                <p className="card-text">Calculadora basada en datos, prediciendo las ganancias de las cosechas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section id="caracteristicas" className="container py-5">
        <h2 className="text-success mb-4 fs-2">Nuestras características principales</h2>
        <div className="row g-4 caracteristicas-container">
          <div className="col-lg-6 d-flex flex-column gap-3 cardsC">
            <div className="cardC">
              <h5 className="text-success">Monitoreo en tiempo real</h5>
              <p>Monitoreo constante de las condiciones del cultivo (temperatura, humedad, enfermedades, etc).</p>
            </div>
            <div className="cardC">
              <h5 className="text-success">Base de datos agrícolas</h5>
              <p>Navegador con conocimiento de diversas plagas, enfermedades, pesticidas y abonos.</p>
            </div>
          </div>
          <div className="col-lg-6 caracteristicas-imagenes d-flex gap-3">
            <img src="./images/Monitoreo.png" className="img-fluid rounded" alt="Cultivo 1" />
            <img src="./images/Reporte.png" className="img-fluid rounded" alt="Cultivo 2" />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="container py-5">
        <h2 className="text-success mb-4 fs-2">Beneficios</h2>
        <div className="row g-4 beneficios-container">
          <div className="col-md-6 beneficio-card">
            <div className="cardB">
              <ul className="mb-0">
                <li>Aumento del rendimiento de los cultivos.</li>
                <li>Reducción de costos operativos.</li>
                <li>Mejora de la calidad y la consistencia de los productos agrícolas.</li>
                <li>Toma de decisiones informada basada en datos precisos.</li>
                <li>Optimización de la cadena de suministro y la logística.</li>
                <li>Mayor capacitación de personal.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 beneficio-img">
            <img src="./images/Beneficios.png" className="img-fluid rounded" alt="Beneficios visuales" />
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="container py-5">
        <h2 className="text-success mb-4 fs-2">Acerca de Nosotros</h2>
        <div className="row g-4 cardsN">
          <div className="col-md-4">
            <div className="cardN">
              <h5 className="text-success">¿Quiénes Somos?</h5>
              <p>Somos una plataforma innovadora que busca utilizar la inteligencia artificial y la visión por computadora para mejorar la gestión de cultivos.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardN">
              <h5 className="text-success">Visión</h5>
              <p>Empoderar a los agricultores para usar la IA para mejorar el cuidado de cultivos y promover la agricultura sostenible y eficiente.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardN">
              <h5 className="text-success">Misión</h5>
              <p>Hacer que la tecnología sea un aliado claro para todos los agricultores, ayudando a sus cultivos y apoyando un futuro agrario más sostenible y productivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESCARGA */}
      <section id="descargar" className="container py-5 text-center">
        <h2 className="text-success mb-4 fs-2">Descarga nuestra app</h2>
        <div className="store-links d-flex justify-content-center gap-3 flex-wrap">
          <a href="#"><img src="./images/play%20store.png" alt="Google Play" /></a>
          <a href="#"><img src="./images/app%20store.png" alt="App Store" /></a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white text-center py-4" style={{ backgroundColor: '#4CAF4F' }}>
        <p className="mb-2">© 2025 SmartField360. Todos los derechos reservados.</p>
        <div className="footer-icons d-flex justify-content-center gap-3">
          <a href="#" className="text-white fs-5"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-whatsapp"></i></a>
        </div>
      </footer>
        
    </div>
  );
};

export default LandingPage;
