// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import ProjectsPage from "./Components/Main/Projects";
import ExperiencePage from "./Components/Main/Experience";
import { CssBaseline, Box, Grid } from "@mui/material";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#0B0526", minHeight: "100vh",paddingTop:'20px' ,overflow:'hidden'}}>
        <Grid
          style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}
        >
          <Navbar />
        </Grid>
        {/* <main> */}
        <Grid
          style={{  }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
          {/* </main> */}
        </Grid>
         <Footer /> 
      </Box>
    </Router>
  );
}

export default App;
