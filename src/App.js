import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import dunes from './assets/dunes.mp4'
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import zIndex from "@material-ui/core/styles/zIndex";

export const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
  },
  contentContainer: {
    paddingTop: '0px',
  },
  button: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
}));


function App() {
  const classes = useStyles();

  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <video playsInline autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'fixed', zIndex: '-1' }}>
          <source src='https://d1jca6dx52tygx.cloudfront.net/dunes.mp4' type="video/mp4" />
          <source src='https://d1jca6dx52tygx.cloudfront.net/dunes.webm' type="video/webm" />
        </video>
        <ButtonGroup className={classes.buttonGroup} variant="text">
        <Button className={classes.button} component={Link} to="/">
          Home
        </Button>
        <Button className={classes.button} component={Link} to="/about">
          About
        </Button>
        <Button className={classes.button} component={Link} to="/projects">
          Projects
        </Button>
        <Button className={classes.button} component={Link} to="/contact">
          Contact
        </Button>
      </ButtonGroup>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
