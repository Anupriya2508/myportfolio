import React from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import CleanIndia1 from "../../Assets/Project/CleanIndia/1.png";
import CleanIndia2 from "../../Assets/Project/CleanIndia/2.png";
import CleanIndia3 from "../../Assets/Project/CleanIndia/3.png";
import CleanIndia4 from "../../Assets/Project/CleanIndia/4.png";
import CleanIndia5 from "../../Assets/Project/CleanIndia/5.png";

import SkinDisease from "../../Assets/Project/SkinDiseasePrediction/Video.mp4"
const projects = [
  {
    title: "Clean India Website",
    description:
      "Clean India Website project is a web application designed to report dirty or polluted areas and automatically contact the nearest municipal corporation for cleanup. Users can upload images of the dirty area, and the application captures the location using geolocation features to accurately determine the latitude and longitude. The front-end was built using HTML5, CSS3, JavaScript, and JQuery, while the back-end utilizes PHP, MySQL, and JavaScript. Visual Studio Code and XAMPP were used as the development platforms.The website includes a streamlined user experience with a sign- up system that generates unique usernames, a login page, and an image upload feature.Once an image is uploaded, the location data is captured, stored, and linked to the image, making it easy for municipal authorities to locate the area.A MySQL database was created to store user details and uploaded images, ensuring that the data is organized and accessible.The project is aligned with the Swachh Bharat Mission, offering a practical, user - friendly solution for improving urban cleanliness by connecting users directly with municipal services. ",
    type: "image",
    media: [
      CleanIndia1,
      CleanIndia2,
      CleanIndia3,
      CleanIndia4,
      CleanIndia5,
    ],
    // liveLink: "https://live-link-to-clean-india-website.com",
  },
  {
    title: "Skin Disease Prediction",
    description:
      "This project focuses on developing a skin disease prediction system using Convolutional Neural Networks (CNN) with MobileNetV2 architecture. The system is trained on the HAM10000 dataset, which consists of 10,000 diverse images of various skin diseases, allowing for enhanced diagnostic accuracy. Users can upload images of their skin conditions, and the system predicts the top three possible diseases along with their likelihood percentages. In addition to providing the predicted diagnosis, the system also suggests potential cures and preventive measures. The goal is to make skin disease diagnosis more accessible, particularly for individuals hesitant to consult a dermatologist. While the system serves as an initial diagnostic tool, it encourages users to seek professional medical advice for further consultation. By leveraging deep learning and a large dataset, the project aims to improve the accuracy and accessibility of skin disease detection.",
    type: "video",
    media: SkinDisease,
  },
];

const ProjectsSection = () => {
  return (
    <Grid
      style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: "20px" }}
    >
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
        Projects
      </Typography>
      <Grid
        container
        style={{
          marginRight: "20px",
        }}
      >
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
