"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { colors } from "../data/colors";

const Contact = () => {
  // State for form fields
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Contact Form Submitted", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 600,
        margin: "0 auto",
        padding: 2,
      }}
    >
      <Typography variant='h4' gutterBottom>
        Contact Us
      </Typography>
      <Typography variant='body1' gutterBottom>
        Have any questions or suggestions? We’d love to hear from you. Fill out
        the form below, and we will get back to you soon.
      </Typography>

      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        <TextField
          label='Name'
          variant='outlined'
          required
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label='Email'
          variant='outlined'
          type='email'
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <Button
          type='submit'
          sx={{
            color: "black",
            fontSize: "1rem",
            "&:hover": {
              color: colors.homeButton,
            },
            alignSelf: "center",
          }}
          endIcon={<SendIcon />}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
