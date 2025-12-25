import "./App.css";
//import RollingGallery from "./component/RollingGallery";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "@fontsource/poppins"; // Default weight 400
import "@fontsource/poppins/600.css"; // Optional: weight 600
import ScrollVelocity from "./components/ScrollVelocity";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      {/*<RollingGallery autoplay={true} pauseOnHover={true} />*/}

      <Navbar />
      <Header />
      <About />
      <ScrollVelocity
        texts={["Full-Stack Developmer","Full-Stack Developmer"]}
        velocity={20}
        className="custom-scroll-text"
      />
      <Timeline />
    </div>
  );
}

export default App;
