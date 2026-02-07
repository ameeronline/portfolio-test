import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Reset error and success messages
        setError('');
        setSuccessMessage('');

        // Check if all fields are filled
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }

        // Validate email
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Submit the form if everything is valid
        try {
            fetch('https://formspree.io/f/mdkkpwqr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
                .then(response => {
                    if (response.ok) {
                        setSuccessMessage('Message sent successfully!');
                        setName('');
                        setEmail('');
                        setMessage('');
                    } else {
                        setError('Something went wrong. Please try again later.');
                    }
                })
                .catch(() => setError('Error sending message.'));
        } catch (err) {
            setError('Error sending message.');
        }
    };

    return (
        <div id='contact' className='contact-section'>
            <div className="contact">
                <h2 className='headline'>Contact</h2>
                <div className="contact-form">
                    <h2 className='contact-note'>Wants to Connect With Me? Leave a Message.</h2>
                    <p>Queries, Networking, or Interested in Hiring Me? Feel free to write here. I'd love to hear from you.</p>
                    <div className="form">
                        <form id='submit-form' onSubmit={handleFormSubmit}>
                            <input 
                                name='name' 
                                type="text" 
                                placeholder='Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                            <input 
                                name='email' 
                                type="email" 
                                placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <textarea 
                                name='message' 
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} 
                            ></textarea>
                            <hr />
                            <button type='submit' className='send-button'>Send Message</button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
