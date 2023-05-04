import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import CardDetails from "./CardDetails";

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-of-server-sohag0505.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <LazyLoad offset={3000} threshold={0.95}>
      <div>
        <h1>Our Chef</h1>
        <Row xs={1} md={3} className="g-4">
          {card.map((c) => (
            <CardDetails key={c.id} id={c.id}></CardDetails>
          ))}
        </Row>
      </div>
    </LazyLoad>
  );
};

export default Card;
