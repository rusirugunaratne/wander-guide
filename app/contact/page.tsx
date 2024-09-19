// pages/contact.tsx
"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Contact = () => {
  // State for form fields
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulating form submission
    console.log("Contact Form Submitted", { name, email, message });

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Contact Us
      </Typography>
      <Typography variant='body1' gutterBottom>
        Have any questions or suggestions? We’d love to hear from you. Fill out
        the form below, and we will get back to you soon.
      </Typography>

      {/* Contact Form */}
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 600,
          marginTop: 4,
        }}
      >
        {/* Name Field */}
        <TextField
          label='Name'
          variant='outlined'
          required
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Field */}
        <TextField
          label='Email'
          variant='outlined'
          type='email'
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Message Field */}
        <TextField
          label='Message'
          variant='outlined'
          required
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Submit Button */}
        <Button type='submit' variant='contained' color='primary'>
          Send Message
        </Button>
      </Box>
    </>
  );
};

export default Contact;
