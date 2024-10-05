import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import MyAbout from "../../Assets/Images/new.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid
      ref={ref}
      container
      sx={{
        padding: 4,
        marginTop: 4,
        backgroundColor: "#0B0526",
        borderRadius: 2,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
        color: "#D2D2D2",
        animation: inView ? `${fadeIn} 1s ease-in-out` : "none",
      }}
    >
      <Grid
        item
        xs={12}
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          border: "1px solid transparent",
        }}
      >
        {/* About Me Section */}
        <Grid item xs={12} sm={9}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 3,
              textAlign: "left",
              color: "#a79fc6",
              animation: inView ? `${fadeIn} 1s ease-in-out` : "none",
            }}
          >
            About Me
          </Typography>

          <Typography
            sx={{
              color: "#EAEAEA",
              textAlign: "left",
              fontFamily: "sans-serif",
              fontSize: "16px",
            }}
          >
            Hello! I’m Anupriya Jayaraj, a passionate web developer with a keen
            focus on the MERN stack. I thrive on creating engaging and dynamic
            websites that deliver exceptional user experiences. My work is
            driven by a blend of creativity and technical expertise, allowing me
            to design innovative solutions that not only meet but exceed user
            expectations. Currently, I’m an Associate Software Engineer at ADP
            India, where I continuously expand my skills and explore
            cutting-edge technologies. These pursuits enrich my perspective and
            inspire me to bring fresh ideas into my work. I’m always eager to
            learn and grow, both personally and professionally, and I look
            forward to connecting with others who share my enthusiasm for
            technology and creativity.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={MyAbout}
            alt="About Me"
            style={{
              width: "150px",
              height: "auto",
              borderRadius: "15px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
