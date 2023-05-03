import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardDetails from "./CardDetails";

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Our Chef</h1>
      <Row xs={1} md={3} className="g-4">
        {card.map((c) => (
          <CardDetails key={c.id} id={c.id}></CardDetails>
        ))}
      </Row>
    </div>
  );
};

export default Card;
