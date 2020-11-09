import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cv from '../../assets/img/profile/cv.jpg'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import './about.css'


const About = () => {
    return (
        <div id="about">
            <div className="about">
              <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
              <Container>
                <Row className="pt-3 pb-5 align-items-center">
                 <Col xs={12} md={6}>
                   <Row className="justify-content-center mb-2 mr-2">
                     <Image className="profile justify-content-end" alt="profile" src={cv} thumbnail fluid />
                   </Row>
                 </Col>
                 <Col xs={12} md={6}>
                  <Row className="align-items-start p-2 my-details rounded">
                    I'm <strong>&nbsp; Pubudu Sandeepa</strong>
                    <br /> I have the capability of interacting with different types of people and
                     working together as a team with a good team spirit.
                     <br />. Want to be with  the technology and find out what’s the best and use them to 
                     do a better service to the industry and the society also.
                     <br /><br />
                     <Col className="d-flex justify-content-center flex-wrap">
                     <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                     </div>
                      <div>
                        <a href="https://drive.google.com/file/d/1mVgnouWLl3yIl_HgVOecuDdFp4EdKk0G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-success">
                           My Resium
                          </Button>
                        </a>
                      </div>
                      <div>
                       <a href="https://github.com/Pubudusandeepa" target="_blank" rel="noopener noreferrer" >
                         <Button className="m-2" variant="outline-dark">
                          Github
                         </Button>
                       </a>
                      </div>
                     </Col>
                  </Row>
                 </Col>
                </Row>
              </Container>
            </div>
        </div>
    )
}

export default About;