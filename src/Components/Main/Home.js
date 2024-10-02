import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Image2 from "../../Assets/Images/2two-removebg-preview.png";
import { keyframes } from "@emotion/react";
import AboutMe from "./AboutMe";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const roles = [
  "MERN stack enthusiast",
  "Web developer",
  "Problem solver",
  "Web designer",
];

const HomePage = () => {
  const [role, setRole] = useState(roles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole(roles[index]);
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container
      sx={{
        marginTop: 2,
        padding: 2,
        borderRadius: 2,
        color: "#D2D2D2",
      }}
    >
      <Grid container>
        {/* Intro Section */}
        <Grid item xs={12} md={3.5}>
          <Box
            component="img"
            src={Image2}
            alt="Profile"
            sx={{
              width: "80%",
              height: "auto",
              borderRadius: "15px",
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={8.5}>
          <Box sx={{ animation: `${fadeIn} 2s ease-in` }}>
            <Typography
              variant="h4"
              sx={{
                background: "linear-gradient(90deg, #fff, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 1,
                fontSize: "1.5rem",
                letterSpacing: "1x",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Hey there, I'm
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#9A92BF",
                fontWeight: "bold",
                marginBottom: 2,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Anupriya Jayaraj
            </Typography>

            <Typography
              key={role}
              variant="h5"
              sx={{
                color: "#6F6699",
                fontWeight: "500",
                marginBottom: 2,
                fontSize: "24px",
                animation: `${fadeIn} 1s ease-in-out 1s forwards`,
              }}
            >
              {role}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#D2D2D2",
                lineHeight: 1.6,
                marginTop: 2,
                fontFamily: "sans-serif",
              }}
            >
              I am deeply passionate about web development, with a particular
              focus on the MERN stack. My expertise lies in creating websites
              that are not only highly functional but also visually appealing.
              By blending creativity with technical proficiency, I strive to
              build innovative, user-centered solutions that drive real impact.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
