import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
      <h1>Talk to Me</h1>
      <p>If you have any questions or opportunities, feel free to reach out!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        />

        <label>Email ID</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email Address"
        />

        <label>Message</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your Message...."
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
