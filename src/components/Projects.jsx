import '../App.css';
import project1 from '../assets/img/Project1.png';
import project2 from '../assets/img/Project2.png';
import project3 from '../assets/img/Project3.png';

function Projects() {
    return (
        <section
            id="projects"
            style={{
                background: "#F5F0E8",
                height: "200vh",
                paddingTop: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                paddingLeft: "90px",
                paddingRight: "90px",
            }}
        >
            <div style={{ alignItems: "center" }}>
                <h1 style={{
                    color: "#6B8E6B",
                    marginBottom: "30px",
                    textAlign: "center"
                }}>
                    Recent Projects
                </h1>
            </div>

            <ProjectRow
                reverse={false}
                title="E-Room"
                image={project1}
                description="E-Room is a web-based meeting room reservation system designed to simplify and digitize the internal room booking process at JMTM. Focusing on enhancing performance, modernizing the user interface, and improving booking efficiency. A WhatsApp integration feature was also implemented to automatically send booking confirmations and reminders, significantly reducing manual coordination time and improving overall user convenience."
                tags={["Laravel", "Bootstrap", "MySQL"]}
                primaryLink="https://eroom.jmtm.co.id/"
                secondaryLink={null}
                showSecondary={false}
            />

            <ProjectRow
                reverse={true}
                title="IOT Water Level Monitoring System"
                image={project2}
                description="Developed a real-time water level monitoring website for Setu Babakan using an MQTT broker, where sensor data is transmitted to the broker and automatically displayed on the web dashboard for continuous monitoring."
                tags={["React", "Vercel", "Postgres"]}
                primaryLink="https://setubabakan-waterlevel.vercel.app/"
                secondaryLink="https://github.com/XenomLight/setu-water-level-iot.git"
                showSecondary={false}
            />

            <ProjectRow
                reverse={false}
                title="Temperature Conversion Website"
                image={project3}
                description="Built a temperature conversion website that allows users to easily convert values between Fahrenheit and Celsius using a responsive web interface with instant result display."
                tags={["HTML", "CSS", "JavaScript"]}
                primaryLink="https://revou-fundamental-course.github.io/19-may-25-nayamarsha/"
                secondaryLink="https://github.com/revou-fundamental-course/19-may-25-nayamarsha.git"
                showSecondary={true}
            />

        </section>
    );
}

export default Projects;

function ProjectRow({ reverse, title, image, description, tags, primaryLink, secondaryLink, showSecondary }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginBottom: "30px",
        }}>
            {reverse ? (
                <>
                    <ImageBox src={image} />
                    <ProjectText
                        title={title}
                        description={description}
                        tags={tags}
                        primaryLink={primaryLink}
                        secondaryLink={secondaryLink}
                        showSecondary={showSecondary}
                    />
                </>
            ) : (
                <>
                    <ProjectText
                        title={title}
                        description={description}
                        tags={tags}
                        primaryLink={primaryLink}
                        secondaryLink={secondaryLink}
                        showSecondary={showSecondary}
                    />
                    <ImageBox src={image} />
                </>
            )}
        </div>
    );
}

function ProjectText({ title, description, tags, primaryLink, secondaryLink, showSecondary }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            color: "#3E3E3E"
        }}>
            <h2>{title}</h2>

            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px"
            }}>
                {tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                ))}
            </div>

            <p style={{ width: "600px", marginTop: "10px" }}>{description}</p>

            <div style={{
                display: "flex",
                marginTop: "20px",
                gap: "15px"
            }}>
                <a href={primaryLink} target="_blank" rel="noopener noreferrer">
                    <PrimaryButton text="View Project" />
                </a>

                {showSecondary && secondaryLink && (
                    <a href={secondaryLink} target="_blank" rel="noopener noreferrer">
                        <SecondaryButton text="GitHub" />
                    </a>
                )}
            </div>
        </div>
    );
}

function Badge({ label }) {
    return (
        <div style={{
            background: "#3E3E3E",
            borderRadius: "20px",
            width: "90px",
            height: "25px",
            color: "#F5F0E8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {label}
        </div>
    );
}

function ImageBox({ src }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "700px",
            height: "300px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f8f8f8"
        }}>
            <img
                src={src}
                alt="project"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }}
            />
        </div>
    );
}

function PrimaryButton({ text }) {
    return (
        <button
            style={{
                padding: "10px 20px",
                backgroundColor: "#6B8E6B",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
            }}
        >
            {text}
        </button>
    );
}

function SecondaryButton({ text }) {
    return (
        <button
            style={{
                padding: "10px 20px",
                backgroundColor: "transparent",
                color: "#6B8E6B",
                border: "2px solid #6B8E6B",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
            }}
        >
            {text}
        </button>
    );
}
