import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"; // Ensure you have these icons installed

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#1D1447",
        color: "#9A92BF",
      }}
    >
      {/* Links Section */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          href="https://github.com/Anupriya2508"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#9A92BF" }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/anupriya-jayaraj"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#9A92BF" }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="mailto:anu.priya.jayaraj08@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#9A92BF" }}
        >
          <Mail />
        </IconButton>
      </Box>

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        © 2024 Anupriya Jayaraj. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
