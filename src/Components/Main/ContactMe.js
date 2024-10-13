import React from "react";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";
import { Send, LinkedIn } from "@mui/icons-material";

const ContactMe = () => {
  return (
    <Box
      sx={{
        padding: "80px 20px",
        background: "transparent", // Remove any background
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
              amazing together. If you have exciting projects or opportunities,
              let’s connect !
            </Typography>

            {/* Additional MUI components */}
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                color: "#a79fc6",
                marginBottom: "20px",
              }}
            >
              Let's create something extraordinary together.
            </Typography>
            {/* LinkedIn Icon */}
            <Button
              href="https://www.linkedin.com/in/anupriya-jayaraj"
              target="_blank"
              sx={{
                color: "#fff",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <LinkedIn sx={{ fontSize: 30 }} />
            </Button>
            <Button
              variant="outlined"
              href="mailto:anu.priya.jayaraj08@gmail.com"
              sx={{
                color: "#fff",
                borderColor: "#a79fc6",
                padding: "10px 30px",
                borderRadius: "30px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#382E67",
                  backgroundColor: "#382E67",
                  transform: "translateY(-3px)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Send an Email
            </Button>
          </Box>
        </Grid>

        {/* Right Section: Transparent Professional Form */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="standard"
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
                variant="standard"
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
                variant="standard"
                multiline
                rows={4}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMe;
