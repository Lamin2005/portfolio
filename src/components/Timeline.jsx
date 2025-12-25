import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faBookOpen,
  faCode,
  faWebAwesome,
  faBriefcase,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  const contentStyles = [
    {
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#fff",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    },
    {
      background: "linear-gradient(135deg, #22c55e, #16a34a)",
      color: "#fff",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    },
    {
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      color: "#fff",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    },
    {
      background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      color: "#fff",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    },
    {
      background: "linear-gradient(135deg, #ec4899, #db2777)",
      color: "#fff",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    },
    {
      background: "linear-gradient(135deg, #a855f7, #7c3aed)",
      color: "#fff",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    },
  ];

  return (
    <div
      style={{ background: "#020617", padding: "50px 0", marginTop: "30px" }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          marginBottom: "40px",
          fontStyle: "italic",
        }}
      >
        My Journey
      </h1>

      <VerticalTimeline lineColor="#38bdf8">
        <VerticalTimelineElement
          date="2020"
          contentStyle={contentStyles[0]}
          iconStyle={{ background: "#6366f1", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3>High School</h3>
          <p>Started tech interest</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2021"
          contentStyle={contentStyles[1]}
          iconStyle={{ background: "#22c55e", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBookOpen} />}
        >
          <h3>Self Learning</h3>
          <p>HTML & CSS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2022"
          contentStyle={contentStyles[2]}
          iconStyle={{ background: "#f97316", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faCode} />}
        >
          <h3>JavaScript</h3>
          <p>Frontend skills</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2023"
          contentStyle={contentStyles[3]}
          iconStyle={{ background: "#38bdf8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faWebAwesome} />}
        >
          <h3>React</h3>
          <p>SPA Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2024"
          contentStyle={contentStyles[4]}
          iconStyle={{ background: "#ec4899", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3>Web Developer</h3>
          <p>Full Stack Projects</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2025"
          contentStyle={contentStyles[5]}
          iconStyle={{ background: "#a855f7", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faDumbbell} />}
        >
          <h3>Fitness Platform</h3>
          <p>Healthy Living App</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
