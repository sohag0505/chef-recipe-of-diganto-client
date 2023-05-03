import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "./../../assets/heart.svg";
const CardDetails = ({ id }) => {
  const [chef, setShef] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShef(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="ps-2">
      <Card>
        <Card.Img variant="top" src={chef.imageLink} height={350} />
        <Card.Body>
          <Card.Title>{chef.chefName}</Card.Title>
          <Card.Text>
            This is {chef.chefName} . I have {chef.yearOfExperience} years
            experiance.
          </Card.Text>
          <h6>Number of Recipes: {chef.numberOfRecipes}</h6>
          <div className="d-flex justify-content-between">
            <h3>
              <img width={35} height={35} src={img} alt="" /> {chef.likes}
            </h3>
            <Link to={`/recipes/${id}`}>
              <Button variant="info">View Recipes</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDetails;
