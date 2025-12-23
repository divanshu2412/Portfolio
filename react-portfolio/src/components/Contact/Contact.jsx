import React, { useState } from "react";
import "./Contact.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  try {
    const res = axios.post(
      "http://localhost:8000/api/v1/customer-query/create",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });

    console.log("Response:", res.data);

    alert("Message sent successfully! ✅");

    // reset form after success
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(
      "Error submitting form:",
      error.response?.data || error.message
    );

    alert("Failed to send message ❌. Please try again.");
  }
    // setFormData({ name: "", email: "", message: "" });
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
      <h1>Talk to Me</h1>
      <p>If you have any questions or opportunities, feel free to reach out!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <div className="input-wrapper-name">
          <PersonIcon className="input-icon-name" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <label>Email ID</label>
        <div className="input-wrapper-email">
          <EmailIcon className="input-icon-email" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message...."
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
