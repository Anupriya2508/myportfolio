// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import ProjectsPage from "./Components/Main/Projects";
import ExperiencePage from "./Components/Main/Experience";
import { CssBaseline, Box, Grid } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSection from "./Components/Projects/ProjectSection";
import Achievements from "./Components/Achievements/Achievements";
import ProfessionalActivities from "./Components/ProfessionalActivities/ProfessionalActivities";

function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: "#0B0526",
          minHeight: "100vh",
          paddingTop: "20px",
          overflow: "hidden",
        }}
      >
        <Grid
          style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}
        >
          <Navbar />
        </Grid>
        <Grid style={{}}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route
              path="/professional-activities"
              element={<ProfessionalActivities />}
            />
          </Routes>
        </Grid>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
