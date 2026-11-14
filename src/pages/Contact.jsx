import { useState } from "react";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-heading">
        <p>WE'D LOVE TO HEAR FROM YOU</p>
        <h1>GET IN TOUCH</h1>
        <span>Have a question? Send us a message.</span>

            <div className="contact-details">
            <p>Email: onileowotimmy77@gmail.com</p>
            <p>Phone: +234 9063529464</p>
            </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Subject</label>
        <input
        type="text"
        name="subject"
        placeholder="What is your enquiry about?"
        value={formData.subject}
        onChange={handleChange}
        required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">SEND MESSAGE</button>
      </form>
      {successMessage && (
  <p className="success-message">{successMessage}</p>
)}
    </main>
  );
}

export default Contact;