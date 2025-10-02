import "./App.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiMysql, SiLaravel } from "react-icons/si";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  // === Perfil ===
  const profile = {
    nombre: "Ania Zapata",
    rol: "Frontend Trainee · Estudiante de Sistemas",
    ubicacion: "Los Polvorines, Buenos Aires",
    email: "zapataleandronahuel@gmail.com",
    telefono: "1132944807",
    linkedin: "https://www.linkedin.com/in/ania-yazmin-zapata-b05b50280/",
    github: "https://github.com/Aniazapp",
  };

  // === Proyectos ficticios ===
  const proyectos = [
    {
      titulo: "Coffeeroasters Landing",
      desc: "Landing page moderna para cafetería de especialidad.",
      img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=600&auto=format&fit=crop",
    },
    {
      titulo: "Stockify Dashboard",
      desc: "Dashboard para control de inventario con tarjetas y gráficos.",
      img: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=600&auto=format&fit=crop",
    },
    {
      titulo: "TaskFlow Kanban",
      desc: "Tablero Kanban simple para organizar tareas con drag & drop.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
    },
  ];

  // === Trayectoria ===
  const experiencia = [
    {
      cargo: "Encargada de Cafetería",
      empresa: "Cirilo Café",
      periodo: "Octubre 2023 - Actualidad",
      bullets: [
        "Barista",
        "Manejo del sistema gastronómico Maxirest",
        "Manejo y cierre de caja",
        "Control de stock de cafetería",
        "Atención al cliente",
        "Manipulación de alimentos",
      ],
    },
  ];

  const educacion = [
    {
      titulo: "Licenciatura en Sistemas",
      institucion: "Universidad Nacional de General Sarmiento",
      periodo: "2021 - Actualidad",
    },
    {
      titulo: "Bachiller en Economía y Administración",
      institucion: "Escuela secundaria N°1 “Lisandro de la Torre”",
      periodo: "2019 - Graduada",
    },
    {
      titulo: "#Sé Programar",
      institucion: "Argentina Programa",
      periodo: "2022 - Finalizado",
    },
    {
      titulo: "Certificado Profesional en Ciberseguridad",
      institucion: "Talento Tech",
      periodo: "2025 - Actualidad",
    },
  ];

  // === Carrusel de fotos perfil ===
  const fotosPerfil = ["/foto1.jpg", "/foto2.jpg", "/foto3.jpg"];
  const [fotoIndex, setFotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFotoIndex((prev) => (prev + 1) % fotosPerfil.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <h1 className="logo">AZ <span>Portfolio</span></h1>
          <nav>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#skills">Skills</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="sobre-mi" className="hero">
        <div className="hero-content">
          <div className="profile-carousel">
            {fotosPerfil.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Foto de perfil"
                className={`profile-img ${i === fotoIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <h2>{profile.nombre}</h2>
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Apasionada por el diseño UI/UX",
              "Estudiante de Sistemas",
              "Creativa y detallista",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="typed-text"
          />
          <p>{profile.ubicacion}</p>
          <div className="links">
            <a href={profile.github} target="_blank" className="btn">GitHub</a>
            <a href={profile.linkedin} target="_blank" className="btn btn-alt">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <div className="grid">
            {proyectos.map((p, i) => (
              <div key={i} className="card">
                <img src={p.img} alt={p.titulo} />
                <div className="card-body">
                  <h3>{p.titulo}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section alt">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card core"><FaHtml5 className="icon html"/><p>HTML5</p></div>
            <div className="skill-card core"><FaCss3Alt className="icon css"/><p>CSS3</p></div>
            <div className="skill-card core"><FaJs className="icon js"/><p>JavaScript</p></div>
            <div className="skill-card core"><FaReact className="icon react"/><p>React</p></div>

            <div className="skill-card plus"><FaNodeJs className="icon node"/><p>Node.js</p></div>
            <div className="skill-card plus"><SiMysql className="icon sql"/><p>SQL</p></div>
            <div className="skill-card plus"><SiMongodb className="icon mongo"/><p>MongoDB</p></div>
            <div className="skill-card plus"><FaPhp className="icon php"/><p>PHP</p></div>
            <div className="skill-card plus"><SiLaravel className="icon laravel"/><p>Laravel</p></div>
            <div className="skill-card plus"><FaJava className="icon java"/><p>Java</p></div>
            <div className="skill-card plus"><FaPython className="icon python"/><p>Python</p></div>
          </div>
        </div>
      </section>

           {/* TRAYECTORIA */}
      <section id="trayectoria" className="section">
        <div className="container">
          <h2 className="section-title">Trayectoria</h2>

          {/* Experiencia */}
          <div className="timeline">
            <h3 className="timeline-title">Experiencia Laboral</h3>
            {experiencia.map((exp, i) => (
              <div key={i} className="timeline-item" data-aos="fade-up">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="cargo">{exp.cargo} · {exp.empresa}</p>
                  <p className="periodo">{exp.periodo}</p>
                  <ul>
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Educación */}
          <div className="timeline">
            <h3 className="timeline-title">Educación y Cursos</h3>
            {educacion.map((edu, i) => (
              <div key={i} className="timeline-item" data-aos="fade-up">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="cargo">{edu.titulo}</p>
                  <p className="periodo">{edu.institucion} · {edu.periodo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACTO */}
      <section id="contacto" className="section alt">
        <div className="container contact">
          <h2 className="section-title">Contacto</h2>
          <p>¿Construimos algo juntos?</p>
          <a href={`https://wa.me/${profile.telefono}`} target="_blank" className="btn">Escribime</a>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} {profile.nombre}. Hecho con React.
      </footer>
    </>
  );
}

export default App;
