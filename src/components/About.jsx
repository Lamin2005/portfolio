import "../style/About.css";
import SplitText from "./SplitText";
import lmh from "../assets/lmh.png";
import ProfileCard from "./ProfileCard";

function About() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section id="about" className="about">
      <div className="about_main">
        <div className="text">
          <SplitText
            text="Hello,Let Me Talk My Story"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <p className="context">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            accusamus corrupti tempore voluptate a atque saepe alias nostrum,
            repellendus ipsa, ducimus asperiores in est delectus! Suscipit
            doloribus dolores minus totam!
          </p>

          <h3>Skillset & tools</h3>

          <div className="skillset">
            <p>Html</p>
            <p>Css</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Php</p>
            <p>C#</p>
            <p>Firebase</p>
            <p>MySQL</p>
          </div>

          <p className="titletext">Designs and Automations</p>

          <p className="context">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            accusamus corrupti tempore voluptate a atque saepe alias nostrum,
            repellendus ipsa, ducimus asperiores in est delectus! Suscipit
            doloribus dolores minus totam!
          </p>

          <h3>Skillset & tools</h3>

          <div className="skillset">
            <p>Html</p>
            <p>Css</p>
            <p>Javascript</p>
          </div>
        </div>
        <div className="img">
          <ProfileCard
            name="La Min Hein"
            title="Fullstack Developer"
            handle="laminhein"
            status="Online"
            contactText="Contact Me"
            avatarUrl={lmh}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
