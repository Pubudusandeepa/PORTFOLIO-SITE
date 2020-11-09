import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contactForm.css'

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
              <Row>
               <Col className="d-flex justify-content-center flex-wrap">
                <div className="m-2">
                  <a href="mailto:ppsandeepa12@gmail.com" >
                    <Button variant="outline-danger" title="gmailme" target="_blank" rel="noopener noreferrer">
                     <i className="fas fa-envelop-square"></i>Email Me
                    </Button>
                  </a>
                </div>
                <div className="m-2">
                 <a href="https://www.facebook.com/pubudu.pubudusandeepa" target="_blank" rel="noopener noreferrer">
                 <Button variant="outline-danger" title="Visit my Facebook">
                   <i className="fab fa-fasebook-square"></i>Facebook
                 </Button>
                 </a>
                </div>
               </Col>
              </Row>
            </Jumbotron>
        </div>
    )
}

export default ContactForm