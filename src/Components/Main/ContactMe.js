import React, { useState } from "react";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";
import { Send, LinkedIn } from "@mui/icons-material";
import axios from "axios";

const ContactMe = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track form submission status
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("data sent", formData);
      const response = await axios.post(
        "https://myportfolio-backend-tdly.onrender.com/addResponse",
        formData
      );
      if (response.status === 201) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        padding: "80px 20px",
        background: "transparent",
        color: "#ffffff",
        marginLeft: "40px",
        marginRight: "60px",
      }}
    >
      <Grid container spacing={5} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={5}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: "2.5rem",
                letterSpacing: "2px",
                color: "#a79fc6",
                marginBottom: "20px",
                textShadow: "0px 5px 10px rgba(0,0,0,0.5)",
                fontFamily: "sans-serif",
              }}
            >
              Contact Me
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                color: "#a79fc6",
                marginBottom: "30px",
                lineHeight: "1.8",
                fontFamily: "sans-serif",
              }}
            >
              Looking forward for collaborating, working, and creating something
              amazing together.
            </Typography>

            {/* Success Message */}
            {submitted && (
              <Typography sx={{ color: "#4CAF50" }}>
                Thank you for contacting !
              </Typography>
            )}
            {error && (
              <Typography sx={{ color: "#f44336" }}>{error}</Typography>
            )}
          </Box>
        </Grid>

        {/* Right Section: Transparent Professional Form */}
        <Grid item xs={12} md={7}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="standard"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "transparent",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#d2d2d2", fontSize: "14px" },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover .MuiInput-underline:before": {
                      borderBottomColor: "#ffffff",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="standard"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "transparent",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#d2d2d2", fontSize: "14px" },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover .MuiInput-underline:before": {
                      borderBottomColor: "#ffffff",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="standard"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "transparent",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#d2d2d2", fontSize: "14px" },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover .MuiInput-underline:before": {
                      borderBottomColor: "#ffffff",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    backgroundColor: "#211F61",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      background: "linear-gradient(45deg, #211F61, #382E67)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMe;
