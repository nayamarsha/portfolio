import '../App.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer () {
    return (
        <footer style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#6B8E6B",
            color: "white",
            flexDirection: "column",
            gap: "10px"
        }}>
            <div>
                <h3>Copyright &copy; 2025 Naya Marsha Nabila</h3>
            </div>
            <div style={{display: "flex", gap: "10px", flexDirection: "row"}}>
                <a href="https://github.com/nayamarsha" target='_blank'><FaGithub size={30} color="#FFFFFF" /></a>
                <a href="https://linkedin.com/in/nayamarshanabila" target='_blank'><FaLinkedin size={30} color="#FFFFFF" /></a>
                <a href="https://www.instagram.com/efflorescxne_/" target='_blank'><FaInstagram size={30} color="#FFFFFF" /></a>
            </div>
        </footer>
    )
}

export default Footer;