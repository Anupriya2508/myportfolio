import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  keyframes,
} from "@mui/material";
import {
  Home as HomeIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  Mail,
  Star as AchievementsIcon, 
  Work as ProfessionalActivitiesIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";

// Keyframes for the pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg,  #352C5E 0%, #110935 100%)",
        padding: "0 20px",
        boxShadow: "none",
        borderRadius: "10px",
        animation: `${slideIn} 0.6s ease-out`,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#D0CFFF" }}
        >
          Hi, Welcome!
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            color="inherit"
            component={Link}
            to="/"
            sx={{
              "&:hover": {
                color: "#AFA2FF",
                animation: `${pulse} 0.8s infinite`, // Pulse animation on hover
              },
            }}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              "&:hover": {
                color: "#AFA2FF",
                animation: `${pulse} 0.8s infinite`,
              },
            }}
          >
            <CodeIcon />
          </IconButton>

          {/* Achievements Icon */}
          <IconButton
            color="inherit"
            component={Link}
            to="/achievements"
            sx={{
              "&:hover": {
                color: "#AFA2FF",
                animation: `${pulse} 0.8s infinite`,
              },
            }}
          >
            <EmojiEventsRoundedIcon />
          </IconButton>
          {/* Professional Activities Icon */}
          <IconButton
            color="inherit"
            component={Link}
            to="/professional-activities"
            sx={{
              "&:hover": {
                color: "#AFA2FF",
                animation: `${pulse} 0.8s infinite`,
              },
            }}
          >
            <BusinessCenterRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
