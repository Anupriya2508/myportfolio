import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import MyAbout from "../../Assets/Images/new.png";
// Keyframes for fade-in animation
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

  // Categorized technologies and stacks
  const skills = {
    Programming: ["C", "Python", "JavaScript", "SQL"],
    WebDevelopment: [
      "HTML5",
      "CSS3",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MERN Stack",
      "Material-UI",
    ],
    Tools: ["Git", "GitHub", "Figma"],
    Methodologies: ["Agile", "RESTful APIs", "Responsive Design"],
    SoftSkills: [
      "Team player",
      "Adaptability",
      "Active Listening",
      "Public Speaking",
    ],
  };

  return (
    <Container
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 4,
        marginTop: 4,
        backgroundColor: "#0B0526",
        borderRadius: 2,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
        color: "#D2D2D2",
        animation: inView ? `${fadeIn} 1s ease-in-out` : "none",
        minHeight: "40px",
        border: "1px solid red",
      }}
    >
      <Grid
        xs={12}
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid green",
        }}
      >
        {/* About Me Section */}
        <Grid xs={7} style={{ border: "1px solid red" }}>
          <Box sx={{ flex: 1, marginRight: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 3,
                textAlign: "left",
                color: "#F5F5F5",
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
              Hello! I’m Anupriya Jayaraj, a passionate web developer with a
              keen focus on the MERN stack. I thrive on creating engaging and
              dynamic websites that deliver exceptional user experiences. My
              work is driven by a blend of creativity and technical expertise,
              allowing me to design innovative solutions that not only meet but
              exceed user expectations. Currently, I’m an Associate Software
              Engineer at ADP India, where I continuously expand my skills and
              explore cutting-edge technologies. These pursuits enrich my
              perspective and inspire me to bring fresh ideas into my work. I’m
              always eager to learn and grow, both personally and
              professionally, and I look forward to connecting with others who
              share my enthusiasm for technology and creativity.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={3} style={{ border: "1px solid red" }}>
          {/* Skills Section */}
          <Grid
            component="img"
            src={MyAbout}
            sx={{
              width: "auto",
              height: "50%",
              borderRadius: "15px",
            }}
          >
            {/* <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            textAlign: "left",
            color: "#F5F5F5",
          }}
        >
          My Skills
        </Typography>

        {Object.entries(skills).map(([category, skillSet], index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#F5F5F5",
                marginBottom: 1,
              }}
            >
              {category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {skillSet.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    margin: 0.5,
                    backgroundColor: "#9A92BF", // Chip background color
                    color: "#0B0526", // Text color
                    "&:hover": {
                      backgroundColor: "#EAEAEA", // Chip hover color
                      color: "#0B0526",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))} */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
