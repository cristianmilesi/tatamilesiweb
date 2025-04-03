import React from "react";
import { BrowserRouter } from "react-router-dom";

// Importar componentes comunes
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import EventBanner from "./components/common/EventBanner";

// Importar secciones
import Home from "./sections/Home";
import Biography from "./sections/Biography";
import Music from "./sections/Music";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
// import Gallery from "./sections/Gallery";

// Nota: Presskit seguirá siendo una página separada
// import Presskit from "./pages/Presskit";

// Eventos de ejemplo
const upcomingEvents = [
  {
    id: 1,
    date: "25 Apr 2025",
    location: "Madrid",
    title: "Concert at Sala Sol",
    link: "#tour",
  },
  {
    id: 2,
    date: "30 Apr 2025",
    location: "Barcelona",
    title: "Spring Festival",
    link: "#tour",
  },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        {upcomingEvents.length > 0 && <EventBanner events={upcomingEvents} />}

        <main className="flex-grow">
          {/* Todas las secciones en la misma página */}
          <section id="home">
            <Home />
          </section>
          <section id="biography">
            <Biography />
          </section>
          <section id="music">
            <Music />
          </section>
          <section id="tour">
            <Tour />
          </section>
          {/* <section id="gallery">
            <Gallery />
          </section> */}
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
