// pages/ProjectsPage.js

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    imageUrl: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    imageUrl: "https://via.placeholder.com/300",
    link: "#",
  },
  // Add more projects as needed
];

function ProjectsPage() {
  return (
    <Container
      sx={{
        marginTop: 4,
        backgroundColor: "#1D1447",
        color: "#E0E0E0",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#382E67",
                color: "#E0E0E0",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "#FFFFFF", borderColor: "#E0E0E0" }}
                  href={project.link}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectsPage;
