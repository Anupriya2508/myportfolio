import React from "react";
import { Grid, Typography, Paper, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import BuildIcon from "@mui/icons-material/Build";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LanguageIcon from "@mui/icons-material/Language";
import TerminalIcon from "@mui/icons-material/Terminal";

// Combined Skills Data
const skills = [
  { name: "React", icon: <CodeIcon sx={{ fontSize: 30, color: "#61DAFB" }} /> },
  {
    name: "Node.js",
    icon: <BuildIcon sx={{ fontSize: 30, color: "#68A063" }} />,
  },
  {
    name: "MongoDB",
    icon: <StorageIcon sx={{ fontSize: 30, color: "#4DB33D" }} />,
  },
  {
    name: "Express",
    icon: <BuildIcon sx={{ fontSize: 30, color: "#0DB7ED" }} />,
  },
  {
    name: "JavaScript",
    icon: <JavascriptIcon sx={{ fontSize: 30, color: "#F7E017" }} />,
  },
  { name: "HTML5", icon: <HtmlIcon sx={{ fontSize: 30, color: "#E34F26" }} /> },
  { name: "CSS3", icon: <CssIcon sx={{ fontSize: 30, color: "#1572B6" }} /> },
  {
    name: "Bootstrap",
    icon: <CssIcon sx={{ fontSize: 30, color: "#7952B3" }} />,
  },
  {
    name: "Python",
    icon: <CodeIcon sx={{ fontSize: 30, color: "#3776AB" }} />,
  },
  { name: "Java", icon: <CodeIcon sx={{ fontSize: 30, color: "#007396" }} /> },
  {
    name: "SQL",
    icon: <StorageIcon sx={{ fontSize: 30, color: "#336791" }} />,
  },
  { name: "C", icon: <CodeIcon sx={{ fontSize: 30, color: "#A8B9CC" }} /> },
  { name: "Git", icon: <GitHubIcon sx={{ fontSize: 30, color: "#F05033" }} /> },
  {
    name: "GitHub",
    icon: <GitHubIcon sx={{ fontSize: 30, color: "#4078C0" }} />,
  },
  {
    name: "Docker",
    icon: <StorageIcon sx={{ fontSize: 30, color: "#0DB7ED" }} />,
  },
  {
    name: "Jenkins",
    icon: <BuildIcon sx={{ fontSize: 30, color: "#D24939" }} />,
  },
  {
    name: "Postman",
    icon: <BuildIcon sx={{ fontSize: 30, color: "#FF6C37" }} />,
  },
  {
    name: "Figma",
    icon: <DesignServicesIcon sx={{ fontSize: 30, color: "#F24E1E" }} />,
  },
  {
    name: "REST APIs",
    icon: <LanguageIcon sx={{ fontSize: 30, color: "#FF4500" }} />,
  },
  {
    name: "VS Code",
    icon: <TerminalIcon sx={{ fontSize: 30, color: "#007ACC" }} />,
  },
];

const Skills = () => {
  return (
    <div
      style={{
        padding: "0.5rem",
        backgroundColor: "#0B0526",
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#a79fc6",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: 600,
        }}
      >
        Expertise & Proficiencies
      </Typography>

      <Grid container justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={2.5} md={1.5} key={index}>
            <Paper
              elevation={0}
              sx={{
                padding: "1rem",
                backgroundColor: "transparent",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#1D1447",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {skill.icon}
                </div>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {skill.name}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
