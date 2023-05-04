import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-hot-toast";

const MoreDetails = ({ recipe }) => {
  const [button, setButton] = useState(false);

  const handleButton = () => {
    toast.success("Successfully Added!");
    setButton(true);
  };
  return (
    <div>
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{recipe.recipeName}</Card.Title>
          <ul>
            {recipe?.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <h6 className="text-danger fw-bold">Cooking Method</h6>
          <Card.Text>{recipe.cookingMethod}</Card.Text>
          <p>Rating: {recipe.rating}</p>
          <Button
            disabled={!button ? false : true}
            onClick={handleButton}
            variant="secondary"
          >
            Secondary
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoreDetails;
