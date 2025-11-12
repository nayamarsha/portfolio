import '../App.css';
import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";

function About() {
    return (
        <section 
        id="about"
        style={{
            background: "#F5F0E8",
            height: "79.5vh",
            paddingTop: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px"
        }}>

            <div style={{flex: 1, display: "flex", paddingLeft: "90px"}}>
                <div style={{background: "#6B8E6B", width: "400px", height: "470px", borderRadius: "20px", boxShadow: "0 8px 10px rgba(0, 0, 0, 0.1)"}}>
                    <div style={{background: "#F5F0E8", width: "350px", height: "130px", borderRadius: "20px", marginTop: "20px", marginLeft: "20px", marginRight: "20px", marginBottom: "20px", display: "flex", flexDirection: "row", gap: "30px", alignItems: "center"}}>
                        <FaCode size={50} color="#3E3E3E" style={{paddingLeft: "20px"}} />
                        <h3 style={{color: "#3E3E3E"}}>Website Development</h3>
                    </div>
                    <div style={{background: "#F5F0E8", width: "350px", height: "130px", borderRadius: "20px", marginTop: "20px", marginLeft: "20px", marginRight: "20px", marginBottom: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "30px"}}>
                        <FaPalette size={50} color="#3E3E3E" style={{paddingLeft: "20px"}} />
                        <h3 style={{color: "#3E3E3E"}}>UI/UX Design</h3>
                    </div>
                    <div style={{background: "#F5F0E8", width: "350px", height: "130px", borderRadius: "20px", marginTop: "20px", marginLeft: "20px", marginRight: "20px", marginBottom: "20px", display: "flex", flexDirection: "row", gap: "30px", alignItems: "center"}}>
                        <FaMobileAlt size={50} color="#3E3E3E" style={{paddingLeft: "20px"}} />
                        <h3 style={{color: "#3E3E3E"}}>Mobile Development</h3>
                    </div>
                </div>
            </div>

            <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
                <h1 style={{color: "#6B8E6B", fontWeight: "bold", fontSize: "32px", marginBottom: "10px"}}>About Me</h1>
                <p style={{ paddingRight: "50px", color: "#3E3E3E"}}>Informatics student at Universitas Pembangunan Nasional "Veteran" Jakarta with a strong focus on Full-Stack Web Development. Experienced in building responsive, scalable web applications focusing on user-centered design and modern technologies. Adept at collaborating in teams, communicating ideas clearly, and solving problems with a structured, analytical approach. Passionate about continuous improvement and delivering impactful digital solutions.</p>
                <div style={{display: "flex", flexDirection: "row", gap: "90px", marginTop: "30px"}}>
                    <div>
                        <h1 style={{color: "#3E3E3E"}}>5<span style={{color: "#6B8E6B"}}>+</span></h1>
                        <p style={{color: "#3E3E3E"}}>Complete Projects</p>
                    </div>
                    <div>
                        <h1 style={{color: "#3E3E3E"}}>10<span style={{color: "#6B8E6B"}}>+</span></h1>
                        <p style={{color: "#3E3E3E"}}>Technical Skills</p>
                    </div>
                    <div>
                        <h1 style={{color: "#3E3E3E"}}>3<span style={{color: "#6B8E6B"}}>rd</span></h1>
                        <p style={{color: "#3E3E3E"}}>Years of Collage</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;