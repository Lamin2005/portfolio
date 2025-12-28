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
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/*<RollingGallery autoplay={true} pauseOnHover={true} />*/}

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
      <ScrollStack>
        <ScrollStackItem>
          <div className="project-card">
            <div className="project-image">
              <img src="/project1.png" alt="Project 1" />
            </div>

            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                A modern portfolio built with React, smooth scrolling, and
                animated stacked cards.
              </p>

              <div className="project-actions">
                <a href="#" className="btn primary">
                  Live
                </a>
                <a href="#" className="btn outline">
                  Code
                </a>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="project-card reverse">
            <div className="project-image">
              <img src="/project2.png" alt="Project 2" />
            </div>

            <div className="project-content">
              <h3>E-Commerce App</h3>
              <p>
                Full-stack MERN application with authentication, cart system and
                admin panel.
              </p>

              <div className="project-actions">
                <a href="#" className="btn primary">
                  Live
                </a>
                <a href="#" className="btn outline">
                  Code
                </a>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="project-card">
            <div className="project-image">
              <img src="/project1.png" alt="Project 1" />
            </div>

            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                A modern portfolio built with React, smooth scrolling, and
                animated stacked cards.
              </p>

              <div className="project-actions">
                <a href="#" className="btn primary">
                  Live
                </a>
                <a href="#" className="btn outline">
                  Code
                </a>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="project-card">
            <div className="project-content">
              <h3>Thank You</h3>
              <p>
                A modern portfolio built with React, smooth scrolling, and
                animated stacked cards.
              </p>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
