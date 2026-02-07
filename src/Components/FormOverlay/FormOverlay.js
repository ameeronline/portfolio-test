import React, { useState } from "react";
import "./FormOverlay.css";

const FormOverlay = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Clear previous error and success messages
    setError("");
    setSuccessMessage("");

    // Check if both fields are filled
    if (!name || !email) {
      setError("Please fill in all the fields.");
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mrbboynr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      // If the form submission is successful, show a success message
      setSuccessMessage("Details submitted successfully!");

      // Trigger the resume download
      downloadResume();

      // Optionally, call onSubmit if you want to pass details back to the parent
      onSubmit({ name, email });

    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form. Please try again later.");
    }
  }

  const downloadResume = () => {
    const resumeUrl = "./files/my_resume.pdf";  // Ensure the file path is correct
    const link = document.createElement("a");

    link.href = resumeUrl;
    link.setAttribute("download", "my_resume.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="form-overlay">
      <div className="form-content">
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3 className="heading">Please Fill Your Details</h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <div className="form-buttons">
            <button type="submit">Download</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOverlay;
