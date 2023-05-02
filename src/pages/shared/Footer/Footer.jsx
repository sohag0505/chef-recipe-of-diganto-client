// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Container } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaVoicemail,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="mt-4 mb-4">
      <Card className="text-center">
        <Card.Header>
          <marquee>
            Thanks for visiting our website. Contact us our
            <span className="text-danger"> Facebook Page</span>,
            <span className="text-danger"> Whatsapp Group</span>,
            <span className="text-danger"> Instagram</span> ,
            <span className="text-danger"> Twitter</span> and
            <span className="text-danger"> Email</span>. May Allah bless us all
            with success, health, happiness, patience and strength.
          </marquee>
        </Card.Header>
        <div className="d-flex justify-content-around">
          <h2>
            <FaFacebookSquare />
          </h2>
          <h2>
            <FaWhatsappSquare />
          </h2>
          <h2>
            <FaTwitter />
          </h2>
          <h2>
            <FaInstagram />
          </h2>
          <h2>
            <FaVoicemail />
          </h2>
        </div>
        <Card.Footer className="text-muted">
          copyright2023@diganto.com
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Footer;
