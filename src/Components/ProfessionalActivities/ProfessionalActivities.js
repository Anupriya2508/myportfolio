import React from "react";
import { Box, Paper, Typography, keyframes, Grid } from "@mui/material";

// Keyframes for the pulse animation from the Navbar
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

// New keyframe for the wavy effect around the circle
const wavy = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Data array for activities
const activities = [
  {
    title: "Google Cloud Challenges",
    description:
      "Having completed various Google Cloud challenges, I not only enhanced my expertise in cloud architecture and deployment but also won swags awarded by Google Cloud. These challenges provided practical insights into cloud computing, including working with Google Cloud services such as storage, machine learning, and serverless architectures. The experience equipped me with the skills to build, manage, and scale applications on the cloud.",
  },
  {
    title: "Coding and Debugging Events & Hackathons",
    description:
      "I actively participated in coding and debugging events across several college symposiums, where I not only tested my programming skills but also secured wins in multiple competitions. These experiences sharpened my problem-solving abilities, taught me how to troubleshoot code efficiently, and exposed me to various competitive coding environments. Each event has contributed to my growth as a versatile coder who excels under pressure.",
  },
  {
    title: "Google Developer Groups (GDG) Technical Meetings",
    description:
      "Through participation in Google Developer Groups (GDG) technical meetings, I gained exposure to cutting-edge technologies, developer tools, and industry best practices. These meetings allowed me to network with seasoned professionals and other developers while deepening my understanding of the latest innovations from Google. The collaborative learning environment helped me stay up-to-date with emerging trends and technologies.",
  },
  {
    title: "Smart India Hackathon-2022",
    description:
      "My team was selected among the top ten teams in our college for the prestigious Smart India Hackathon. This national-level competition fostered an environment of creativity and innovation, where we tackled real-world problems using technology-driven solutions. The experience honed my teamwork, coding, and project management skills, while allowing me to contribute to a high-impact solution that reflected both technical expertise and creative thinking.",
  },
  {
    title: "PALS ANALYSE 2022 - Case Study Event",
    description:
      "At PALS ANALYSE 2022, my team was tasked with solving a real-world business problem, and we presented our case study to a panel of experts. This event challenged my analytical thinking and ability to apply data-driven strategies in addressing complex business issues. By collaborating closely with my team, I gained valuable experience in delivering compelling, solution-oriented presentations backed by sound research and data analysis.",
  },
];

// Individual Activity Card Component
const ActivityCard = ({ title, description, isReversed }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        margin: "20px 0px",
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: isReversed ? "row-reverse" : "row",
      }}
    >
      {/* Circle for the title with new design */}
      <Box
        sx={{
          width: 200,
          height: 200,
          background: "linear-gradient(90deg, #352C5E 0%, #110935 100%)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#D0CFFF",
          fontWeight: "bold",
          fontSize: "18px", 
          textAlign: "center",
          position: "relative",
          boxShadow: "0px 0px 15px #AFA2FF", 
          "&::before": {
            content: '""',
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "2px solid transparent",
            background:
              "linear-gradient(45deg, #AFA2FF, #D0CFFF, #AFA2FF, #352C5E)",
            backgroundSize: "400% 400%",
            animation: `${wavy} 8s ease infinite`,
            top: "-10px",
            left: "-10px",
            zIndex: -1,
          },
          // "&:hover": {
          //   animation: `${pulse} 0.8s infinite`,
          //   backgroundColor: "#AFA2FF",
          //   color: "#fff",
          //   boxShadow: "0px 0px 20px #fff", // More intense glow on hover
          // },
        }}
      >
        {title}
      </Box>

      {/* Rectangular box for the description */}
      <Paper
        elevation={3}
        sx={{
          marginLeft: isReversed ? "40px" : "40px",
          marginRight: isReversed ? "40px" : "40px",
          padding: "20px",
          backgroundColor: "#110935",
          width: "650px",
          borderRadius: "5px",
          borderLeft: isReversed ? "none" : "5px solid #352C5E",
          borderRight: isReversed ? "5px solid #352C5E" : "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          color: "#D0CFFF",
          // "&:hover": {
          //   backgroundColor: "#352C5E",
          //   color: "#fff",
          // },
        }}
      >
        <Typography variant="body1">{description}</Typography>
      </Paper>
    </Box>
  );
};

const ProfessionalActivities = () => {
  return (
    <>
      <Grid style={{ marginTop: "30px", marginLeft: "10px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#c6bdff",
            marginLeft: "20px",
            fontFamily: "sans-serif",
            fontSize: "25px",
          }}
        >
          Professional Activity
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "20px",
            color: "#D0CFFF",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              isReversed={index % 2 !== 0} // Alternates layout: reversed for even indexes
            />
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default ProfessionalActivities;
