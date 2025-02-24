import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div>
      <main className="home-main">
        <section className="home-content">
          <h1>Bienvenidos a Rav Inversiones</h1>
          <p>Nos especializamos en ofrecer las mejores soluciones de inversión para nuestros clientes.</p>
          <button className="home-btn">Conoce más</button>
        </section>
      </main>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <ServiceCard
            title="Construcción"
            description="Proyectos de infraestructura con altos estándares de calidad."
          />
          <ServiceCard
            title="Topografía"
            description="Estudios topográficos precisos para cualquier tipo de terreno."
          />
          <ServiceCard
            title="Ingeniería Civil"
            description="Diseño y ejecución de proyectos de ingeniería de alto nivel."
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="about-title">Sobre Nosotros</h2>
          <p className="about-description">
            Somos una empresa líder en el sector de la construcción y topografía,
            comprometidos con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
