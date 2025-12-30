import "./App.css";
//import RollingGallery from "./component/RollingGallery";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "@fontsource/poppins"; // Default weight 400
import "@fontsource/poppins/600.css"; // Optional: weight 600
import ScrollVelocity from "./components/ScrollVelocity";
import Timeline from "./components/Timeline";
import Ctasection from "./components/Ctasection";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/*<RollingGallery autoplay={true} pauseOnHover={true} />*/}
      {loading && (
        <div className="page-loader">
          <Preloader size={64} />
        </div>
      )}
      {!loading && (
        <>
          <Navbar />
          <Header />
          <About />
          <ScrollVelocity
            texts={["Full-Stack Developer", "Full-Stack Developer"]}
            velocity={20}
            className="custom-scroll-text"
          />
          <Timeline />
          <Ctasection />
          <Project />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
