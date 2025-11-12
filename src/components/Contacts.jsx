import '../App.css';
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Message sent successfully 😊",
        confirmButtonColor: "#6B8E6B",
      });
      form.current.reset();
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong 😔",
        confirmButtonColor: "#6B8E6B",
      });
      console.error(error.text);
    });
  };

  return (
    <section
      id="contacts"
      style={{
        background: "#F5F0E8",
        height: "85vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        paddingRight: "90px",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <hr style={{ margin: 0, border: "1px solid #6B8E6B", width: "80px" }} />
          <h3 style={{ color: "#6B8E6B", margin: 0 }}>Contacts</h3>
        </div>
        <h1 style={{ color: "#3E3E3E", marginTop: "50px", paddingLeft: "90px" }}>
          Have a Project? <br /> Let's Talk!
        </h1>

        <button
          type="submit"
          form="contact-form"
          className="btn-desktop"
          style={{
            padding: "10px 20px",
            backgroundColor: "#6B8E6B",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            width: "150px",
            marginLeft: "90px",
          }}
        >
          Submit
        </button>
      </div>

      <form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "450px",
          marginTop: "50px",
          backgroundColor: "#F5F0E8",
        }}
      >
        <label style={{ color: "#3E3E3E" }}>Name</label>
        <input
          style={{
            color: "#3E3E3E",
            height: "40px",
            backgroundColor: "#F5F0E8",
            borderColor: "#6B8E6B",
            borderRadius: "8px",
          }}
          type="text"
          name="user_name"
          required
        />

        <label style={{ color: "#3E3E3E" }}>Email</label>
        <input
          style={{
            color: "#3E3E3E",
            height: "40px",
            backgroundColor: "#F5F0E8",
            borderColor: "#6B8E6B",
            borderRadius: "8px",
          }}
          type="email"
          name="user_email"
          required
        />

        <label style={{ color: "#3E3E3E" }}>Subject</label>
        <input
          style={{
            color: "#3E3E3E",
            height: "40px",
            backgroundColor: "#F5F0E8",
            borderColor: "#6B8E6B",
            borderRadius: "8px",
          }}
          type="text"
          name="subject"
          required
        />

        <label style={{ color: "#3E3E3E" }}>Message</label>
        <textarea
          style={{
            color: "#3E3E3E",
            height: "100px",
            backgroundColor: "#F5F0E8",
            borderColor: "#6B8E6B",
            borderRadius: "8px",
          }}
          name="message"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          className="btn-mobile"
          style={{
            padding: "10px 20px",
            backgroundColor: "#6B8E6B",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contacts;
