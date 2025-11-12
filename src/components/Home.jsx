import foto from '../assets/img/foto portfolio.jpeg';
import cv from '../assets/files/cv.pdf';
import '../App.css';

function Home() {
  const month = new Date().getMonth() + 1;

  let season;
  if (month >= 3 && month <= 5) season = "spring";
  else if (month >= 6 && month <= 8) season = "summer";
  else if (month >= 9 && month <= 11) season = "autumn";
  else season = "winter";

  return (
    <section
      id="home"
      className={`season-${season}`}
      style={{
        position: "relative",
        width: "100%",
        background: "#F5F0E8",
        minHeight: "77.5vh",
        paddingTop: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "40px",
      }}
    >
      <div className="home-container">
        <div className="home-text">
          <h1 className="hello-text">Hello,</h1>
          <h2 className="name-text">I'm Naya Marsha Nabila</h2>
          <h1 className="role-text">Software Engineer</h1>

          <div className="home-buttons">
            <button
              onClick={() =>
                document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Got a project?
            </button>

            <a href={cv} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download CV
            </a>
          </div>
        </div>

        <div className="home-photo">
          <img src={foto} alt="foto diri" />
        </div>
      </div>

      <div className="skills-marquee">
        <div className="marquee-track">
          {[
            "HTML5",
            "CSS",
            "Javascript",
            "Laravel",
            "Node.js",
            "Tailwind CSS",
            "Bootstrap",
            "MySQL",
            "MongoDB",
            "Git",
            "Github",
          ].map((skill, i) => (
            <span key={i} className="marquee-item">
              {skill}
            </span>
          ))}
          {[
            "HTML5",
            "CSS",
            "Javascript",
            "Laravel",
            "Node.js",
            "Tailwind CSS",
            "Bootstrap",
            "MySQL",
            "MongoDB",
            "Git",
            "Github",
          ].map((skill, i) => (
            <span key={`dup-${i}`} className="marquee-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
