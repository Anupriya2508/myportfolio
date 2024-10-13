import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CardActionArea,
  Divider,
} from "@mui/material";

const ProjectCard = ({ project }) => {
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
    <>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
        }}
      >
        {/* Media Section */}
        <Grid xs={6}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "30px",
              backgroundColor: "#0B0526",
              paddingBottom: "20px",
              marginTop: "20px",
              width: "90%",
            }}
            elevation={3}
          >
            <CardActionArea>
              {project.type === "image" ? (
                <Slider {...settings}>
                  {project.media.map((img, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="250"
                      image={img}
                      alt={`Project ${project.title} Image ${index + 1}`}
                      style={{ borderRadius: "10px", objectFit: "cover" }}
                    />
                  ))}
                </Slider>
              ) : (
                <video width="100%" controls style={{ borderRadius: "10px" }}>
                  <source src={project.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </CardActionArea>
            <Divider style={{ margin: "10px 0" }} />
            {project.liveLink && (
              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.liveLink}
                  target="_blank"
                  style={{ width: "100%", backgroundColor: "#211F61" }}
                >
                  Live Link
                </Button>
              </CardContent>
            )}
          </Card>
        </Grid>

        {/* Description Section */}
        <Grid xs={6}>
          <CardContent
            style={{ marginTop: "10px", marginLeft: "30px", width: "90%" }}
          >
            <Typography
              variant="h5"
              style={{ marginBottom: "10px", color: "#AFA2FF" }}
            >
              {project.title}
            </Typography>
            <Typography variant="body2" color="#c6bdff">
              {project.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectCard;
