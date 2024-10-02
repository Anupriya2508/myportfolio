// Main.js
import React from "react";
import { Container, Box ,Grid} from "@mui/material";
import HomePage from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Footer from "../Footer/Footer";
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
      <Grid>
        <AboutMe />
      </Grid>
      <Grid>
        <Experience />
      </Grid>
     
    </Grid>
  );
};

export default Main;
