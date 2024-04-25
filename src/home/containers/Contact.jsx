import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Number: '',
    Message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear validation error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Name.trim() || formData.Name.trim().length < 3 || formData.Name.trim().length > 30) {
      newErrors.Name = 'Name must be between 3 and 30 characters';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newErrors.Email = 'Invalid email address';
    }
    if (!/^\d{10}$/.test(formData.Number)) {
      newErrors.Number = 'Number must be 10 digits';
    }
    if (!formData.Message.trim()) {
      newErrors.Message = 'Message cannot be empty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log('Form data:', formData);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span> contact </span> us
        </h1>

        <div className="row">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className={`box ${errors.Name && 'error'}`}
            />
            {errors.Name && <p className="error-text">{errors.Name}</p>}
            <input
              type="email"
              placeholder="Enter Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className={`box ${errors.Email && 'error'}`}
            />
            {errors.Email && <p className="error-text">{errors.Email}</p>}
            <input
              type="number"
              placeholder="Enter Number"
              name="Number"
              value={formData.Number}
              onChange={handleChange}
              className={`box ${errors.Number && 'error'}`}
            />
            {errors.Number && <p className="error-text">{errors.Number}</p>}
            <textarea
              name="Message"
              placeholder="Message"
              value={formData.Message}
              onChange={handleChange}
              className={`box ${errors.Message && 'error'}`}
            ></textarea>
            {errors.Message && <p className="error-text">{errors.Message}</p>}
            <input type="submit" value="Send Message" className="btn" />
          </form>

          <div className="image">
            {/* Your map iframe */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4354467780263!2d75.3176805740654!3d19.86382662677051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9860cbffffff%3A0xa66e2b579fb7570!2sDeogiri%20Institute%20of%20Engineering%20and%20Management%20Studies!5e0!3m2!1sen!2sin!4v1709435181733!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
