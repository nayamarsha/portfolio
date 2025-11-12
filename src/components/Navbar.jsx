import '../App.css'
import { useState } from "react";

function Navbar (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 32px",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            background: "#F5F0E8",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}>
            <div style={{ fontWeight: "bold", fontSize: "25px", color: "#3E3E3E"}}>
                Naya Marsha
            </div>

            <div 
                className={`hamburger ${isOpen ? "active" : "" }`}
                onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`} style={{ fontWeight: "bold", display: "flex", listStyle: "none", gap: "20px", color: "#3E3E3E"}}>
                <li><a className="nav-link" href="#home">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#projects">Projects</a></li>
                <li><a className="nav-link" href="#contacts">Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;