import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import img from "./../../assets/heart.svg";

const ViewRecipes = () => {
  const { id } = useParams();
  const [chef, setShef] = useState({});

  useEffect(() => {
    fetch(`https://chef-recipe-of-server-sohag0505.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShef(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <Container className="mt-4">
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img variant="top" src={chef.imageLink} height={350} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mt-4">{chef.chefName}</h5>
                <p className="mt-4">
                  This is {chef.chefName} . I have {chef.yearOfExperience} years
                  experiance.
                </p>
                <h3 className="mt-4">
                  <img width={35} height={35} src={img} alt="" /> {chef.likes}
                </h3>
                <ul className="mt-4">
                  {chef?.recipes?.map((rec) => (
                    <li key={rec.recipeName}>{rec.recipeName}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewRecipes;
