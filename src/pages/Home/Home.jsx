/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import ExtraSection from "./ExtraSection";

const Home = () => {
  return (
    <Container className="mt-4">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src="https://lh3.googleusercontent.com/p/AF1QipPVnZudYyGa9LJXu54wyPaSakgBuU6BCj4W4Zmy=s1360-w1360-h1020"
            alt="Beef T-bone"
            height={200}
          />
          <Carousel.Caption>
            <h5>Beef T-bone</h5>
            <p>Beef T-bone is the most popular food for Diganto.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://lh3.googleusercontent.com/p/AF1QipOxs3lpRjzwUOnJqqZDclLzd7LEmwB-BEHjfYnn=s1360-w1360-h1020"
            alt="chicken"
            height={200}
          />
          <Carousel.Caption>
            <h5>Chicken BBQ</h5>
            <p>Its very testy and most popular too.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://lh3.googleusercontent.com/p/AF1QipPRySfNIra2vciPg8HP_x_niZLs8fpgr46eAlo1=s1360-w1360-h1020"
            alt="cook"
            height={200}
          />
          <Carousel.Caption>
            <h5>Cook</h5>
            <p>Cook is always favourite for major person.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-4">
        <ExtraSection></ExtraSection>
      </div>
    </Container>
  );
};

export default Home;
