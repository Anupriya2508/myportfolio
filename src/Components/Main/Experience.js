import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Keyframes for the slide animation

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
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

// Keyframes for background animation (floating dots or waves)
const bgAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Keyframes for abstract shapes' floating effect
const floatingEffect = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(10px) translateY(10px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;
const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "ADP India",
      duration: "July 2023 - Present",
      description: `Joined ADP as an Associate Software Engineer, contributing to the development team in building and enhancing web applications. My focus is on writing clean, efficient code while adhering to industry best practices.Actively involved in understanding business requirements, performing unit tests, and delivering scalable, maintainable solutions. Additionally, learning and applying agile methodologies and version control practices like Git to streamline the development process and ensure team collaboration.`,
    },
    {
      role: "Associate Product Owner Intern",
      company: "CStream",
      duration: "March 2023 - June 2023",
      description: `Transitioned to the role of Associate Product Owner, focusing on driving product development and enhancing features.

Played a significant role in developing a robust job portal feature on gidy.ai, leveraging the MERN stack. This included meticulous requirements gathering to align with user needs, precise Figma design for intuitive user interfaces, and expert implementation of both front-end and back-end components.

Also spearheaded the development of the web-based quiz feature, ensuring consistency with its mobile app counterpart. This encompassed Figma design and expert front-end implementation using React.`,
    },
    {
      role: "Software Engineer Intern",
      company: "CStream",
      duration: "October 2022 - February 2023",
      description: `Developed initial small-scale projects independently, progressed to build and deploy web applications using the MERN stack, with a focus on gaining deep insights into software development and achieving proficiency with the stack.

 Engaged in developing the Quiz feature for the mobile application [GIDY], involving requirements analysis, UI/UX design with Figma, and front-end implementation using React Native. Engineered the back-end with Node.js and Express, ensuring scalability and integrated MongoDB for efficient data management.

 Additionally, acquired proficiency in version control systems such as Git and GitLab, mastering their commands and workflows essential for effective collaboration and code management throughout the development process.

 Implemented a comprehensive quiz management feature within the internal application using the MERN stack.

 Learned the agile methodologies workflow and proficiently developed full-stack features, utilizing technical skills to skillfully manage and resolve demanding software engineering challenges.`,
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        marginTop: 1,
        marginLeft: "20px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#9A92BF",
          marginBottom: "40px",
        }}
      >
        Experience
      </Typography>

      {/* Timeline */}
      <Grid container>
        {experiences.map((exp, index) => (
          <Grid
            container
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            sx={{
              marginBottom: 6,
              display: "flex",

              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} sm={5}>
              <Card
                sx={{
                  padding: 1,
                  borderRadius: 2,
                  background:
                    "linear-gradient(90deg,  #352C5E 0%, #110935 100%)",
                  // animation: `${slideIn} 0.6s ease-out`,
                  animation: inView
                    ? `${bgAnimation} 3s ease-in-out infinite`
                    : "none",

                  animation: `${floatingEffect} 6s ease-in-out infinite`,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#9A92BF",
                      fontWeight: "bold",
                      marginBottom: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#9A92BF",
                      marginBottom: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9A92BF", fontFamily: "sans-serif" }}
                  >
                    {exp.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Section (Description outside the card) */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                // paddingLeft: 4,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#9A92BF",
                  fontFamily: "sans-serif",
                }}
              >
                {exp.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
