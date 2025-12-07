import "./App.css";
//import RollingGallery from "./component/RollingGallery";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "@fontsource/poppins"; // Default weight 400
import "@fontsource/poppins/600.css"; // Optional: weight 600
import TawkTo  from "./components/Tawk";

function App() {
  
  return (
    <div className="App">
      {/*<RollingGallery autoplay={true} pauseOnHover={true} />*/}
      <TawkTo />
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
