// Main.js
import React from "react";
import { Container, Box, Grid } from "@mui/material";
import HomePage from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "../Main/Skills"
const Main = () => {
  return (
    <Grid
      sx={{
        marginTop: 2,
        padding: 1,
        borderRadius: 2,
        color: "#D2D2D2",
      }}
    >
      <HomePage />
      <Grid style={{ marginRight: "80px", marginLeft: "50px" }}>
        <AboutMe />
      </Grid>
      <Grid>
        <Experience />
      </Grid>
      <Grid>
        <Skills />
      </Grid>
    </Grid>
  );
};

export default Main;
