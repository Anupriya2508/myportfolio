import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
} from "@mui/material";
import paperPublished from "../../Assets/Achievements/Paperpublished.jpeg";
import paperPresentation from "../../Assets/Achievements/paperPresentation.jpeg";
import paperPresentation1 from "../../Assets/Achievements/paperPresentation1.jpeg";
import Slider from "react-slick";

import HyperHurdle1 from "../../Assets/Achievements/Symp/1.jpeg";
import HyperHurdle2 from "../../Assets/Achievements/Symp/2.jpeg";
import HyperHurdle3 from "../../Assets/Achievements/Symp/3.jpeg";

import HackWithFoks from "../../Assets/Achievements/Coderclub/2.jpg";

import PoemCertificate from "../../Assets/Achievements/poem.jpeg";

const achievementsData = [
  {
    title:
      "Published Research Paper: Automated Multiclass Dermatological Diagnosis Prediction using Improved Mobile-Net Model",
    description:
      "I am proud to have co-authored and published a research paper titled Automated Multiclass Dermatological Diagnosis Prediction using Improved Mobile-Net Model. This research presents significant advancements in applying machine learning to the field of dermatology, focusing on automated diagnosis of multiple skin diseases. By refining the MobileNetV2 architecture, our model enhances the accuracy and efficiency of diagnosing a wide range of dermatological conditions from user-provided skin images. The paper delves into how the improved Mobile-Net architecture is adapted to handle multiclass classification, optimizing both computational efficiency and diagnostic accuracy. We applied the model to the HAM10000 dataset, and the results showed promising improvements in skin disease prediction, making it more accessible and reliable for early diagnosis. This publication reflects our commitment to leveraging machine learning technologies for impactful healthcare solutions, and it underscores the importance of continued research in this area.",
    image: paperPublished,
    type: "image",
  },
  {
    title: "Conference Presentation: IEEE IATMSI-2024",
    description:
      "I had the privilege of presenting my research paper titled Automated Multiclass Dermatological Diagnosis Prediction using Improved Mobile-Net Model at the prestigious IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI-2024). Held on March 15th, 2024, this event was organized by the IEEE MP Section in collaboration with ABV-IIITM Gwalior, India. The conference provided a valuable platform to share my research, which focuses on enhancing the MobileNetV2 architecture for accurate and efficient multiclass dermatological disease diagnosis using machine learning. It was an enriching experience, offering the opportunity to engage with leading professionals and gain insights into cutting-edge innovations in technology and healthcare.This experience further solidified my commitment to leveraging machine learning for impactful healthcare solutions, and I'm excited to continue contributing to this evolving field.",
    image: paperPresentation,
    type: "image",
  },
  {
    title: "'Hyper Hurdle' – CRYPTRIX'23 Third Place",
    description:
      "I am proud to have participated in the 'Hyper Hurdle' event at CRYPTRIX'23, a National Level Students Symposium organized by St. Joseph's College of Engineering. This competition was designed to challenge participants in various aspects of web development and coding. Throughout the event, my teammate and I engaged in a series of tasks that required us to debug and modify HTML code while solving intricate riddles. In the first round, we tackled five HTML-related challenges, where each solved riddle led us to a keyword essential for the subsequent round. Utilizing our creativity and technical skills, we then crafted an attractive and functional webpage centered around the obtained keyword in the second round. This experience not only enhanced our coding proficiency but also allowed us to work collaboratively under pressure, demonstrating our problem-solving capabilities and adaptability in a competitive environment.",
    media: [HyperHurdle1, HyperHurdle3, HyperHurdle2],
    type: "slider",
  },
  {
    title: "Hack With Folks 2023 - Third Place",
    description:
      "I am thrilled to announce that my team secured third place at the Hack With Folks 2023 competition, organized by the Coders Club of Saveetha Engineering College. Alongside my teammate, we developed a solution addressing the pressing issue of pollution through a user-friendly website that enables individuals to upload images or videos of polluted areas while granting access to their location. This information is stored in a database to facilitate initiatives aimed at cleaning up these areas. During our presentation, we provided a comprehensive demonstration of our project, showcasing its potential impact. I would like to express my gratitude to the organizers for hosting such engaging events that foster innovation and problem-solving.",
    image: HackWithFoks,
    type: "image",
  },
  {
    title:
      "Presentation of Research Paper at Vignan Institute of Science and Technology",
    description:
      "I presented my first research paper titled 'Rainfall Prediction Using Time Series Analysis with the ARIMA Model' at the international conference on ' Recent Trends in Computational Intelligence & Informatics,' held at Vignan Institute of Science and Technology from October 29 to 30, 2021. This opportunity allowed me to delve into the application of the ARIMA (AutoRegressive Integrated Moving Average) model for predicting rainfall patterns based on historical data. In my research, I demonstrated the model's effectiveness in forecasting rainfall, emphasizing its importance for various sectors such as agriculture, water resource management, and disaster preparedness. Presenting my findings at the conference facilitated engaging discussions with fellow researchers and experts, enriching my understanding of time series analysis and its practical implications.",
    image: paperPresentation1,
    type: "image",
  },
  {
    title: "Publication of Co-Authored Book",
    description:
      "I am thrilled to announce the publication of my first book as a co-author, titled 'பேரன்பின் அச்சாணி' (\"Peranbin Aachaani\"), now available on Amazon Kindle. This book explores the profound bond between a child and their father, presenting a unique narrative that captures their journey through life together. It beautifully illustrates the love that children have for their fathers, as well as the unconditional love that fathers have for their children.",
    image: PoemCertificate,
    type: "image",
  },
];

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{ color: "#ffffff", marginLeft: "20px", marginTop: "30px" }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#c6bdff",
          marginLeft: "20px",
          fontFamily: "sans-serif",
          fontSize:'25px'
        }}
      >
        Achievements
      </Typography>
      <Grid
        xs={12}
        style={{ marginBottom: "20px", marginLeft: "30px", marginTop: "20px" }}
      >
        {achievementsData.map((achievement, index) => (
          <Grid item xs={12} key={index} style={{ marginBottom: "40px" }}>
            <Grid container>
              {/* Media Section */}
              <Grid item xs={12} sm={5.5} style={{ width: "90%" }}>
                <Card
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#AFA2FF",
                  }}
                  elevation={3}
                >
                  <CardActionArea>
                    {achievement.type === "slider" ? (
                      <Slider {...settings}>
                        {achievement.media.map((img, index) => (
                          <CardMedia
                            key={index}
                            component="img"
                            height="360"
                            width={80}
                            image={img}
                            alt={`Achievement ${achievement.title} Image ${
                              index + 1
                            }`}
                            style={{ borderRadius: "10px", objectFit: "cover" }}
                          />
                        ))}
                      </Slider>
                    ) : (
                      <CardMedia
                        component="img"
                        height="380"
                        width="100%"
                        image={achievement.image}
                        style={{ borderRadius: "10px", objectFit: "cover" }}
                      />
                    )}
                  </CardActionArea>
                </Card>
              </Grid>

              {/* Description Section */}
              <Grid item xs={12} sm={5.5}>
                <CardContent style={{ marginLeft: "30px" }}>
                  <Typography
                    style={{
                      marginBottom: "15px",
                      color: "#AFA2FF",
                      fontFamily: "sans-serif",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#c6bdff"
                    style={{ fontFamily: "sans-serif", fontSize: "13px" }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Achievements;
