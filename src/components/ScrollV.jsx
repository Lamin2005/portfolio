import Squares from "./Squares";
import "../style/Squares.css";
import ScrollVelocity from "./ScrollVelocity";

function ScrollV() {
  let velocity = "100";

  return (
    <div className="scrollvelocity">
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
      
    </div>
  );
}

export default ScrollV;
