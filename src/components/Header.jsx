import "../style/Header.css";
import Squares from "./Squares";
import "../style/Squares.css";
//import TrueFocus from "./TrueFocus";
import laminhein from "../assets/laminhein.jpg";
import laminhein2 from "../assets/laminhein2.jpg";
import laminhein5 from "../assets/laminhein5.jpg";
import laminhein6 from "../assets/laminhein6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import Stack from "./Stack";

function Header() {
  const images = [
    { id: 1, img: laminhein6 },
    { id: 2, img: laminhein2 },
    { id: 3, img: laminhein5 },
    { id: 4, img: laminhein },
  ];

  return (
    <section className="h-main" id="home">
       <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#271E37"
        hoverFillColor="#222"
        className="my-canvas"
      />   

       <div className="header">  
        <div className="profileimg">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 200, height: 200 }}
            cardsData={images}
          />
        </div>
        <p className="greeting">Hi, I'm La Min Hein </p>
        <h1>a fullstack developmer based in Myanmar.</h1>

        <p className="intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus consectetur rerum nemo repudiandae laudantium!
          Repellendus iste maxime quia magnam dolore laboriosam inventore nisi
          nulla, deserunt.
        </p>
        <div className="buttons">
          <button className="contact_me">
            Contact Me <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
          <button className="download_cv">
            Download CV <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>

    </section>
  );
}

export default Header;
