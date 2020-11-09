import React from 'react';
import './App.css';
import Footer from './components/footer/footer.component'
import MyCarousal from './components/my-carousal/my-carousal.component'
import Navbar from './components/my-navbar/my-navbar.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Contact from './pages/contact-form/contact-form.component'
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from 'react-bootstrap/Container';

// import { ThemeProvider } from 'styled-components';
// import theme from './themes/theme';


const  App = () => {
  return (
  
    <div className="App" style={{ position: "relative" }}>
     <Navbar />
      <TitleMessage />
      <MyCarousal />
    
     <div>
       <Parallax blur={{min: -30, max:30}} bgImage={require('./assets/img/parallex/background.webp')}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={700}>
                <About />
              </Fade>
            </Container>
          </div>
       </Parallax>
     </div>
     <Container className="container-box rounded">
       <Fade duration={700}>
        <hr />
        <Skills />
        </Fade>
     </Container>
     <Container className="container-box rounded">
      <Fade duration={700}>
       <hr />
       <Contact />
      </Fade>
     </Container>
     <Footer />
    </div>

  );
}

export default App;
