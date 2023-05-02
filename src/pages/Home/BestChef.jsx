// eslint-disable-next-line no-unused-vars
import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BestChef = () => {
  return (
    <div className="mt-4">
      <div className="mt-4 text-center">
        <h2>The Best Chef in 2022</h2>
      </div>
      <CardGroup className="mt-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://thebestchefawards.com/wp-content/uploads/2022/09/1-Dabiz-Munoz-Cap.png"
          />
          <Card.Body>
            <Card.Title>#1 Dabiz Muñoz</Card.Title>
            <Card.Text>Spain</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Powered by Perlage</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thebestchefawards.com/wp-content/uploads/2022/09/2-Rene-Redzepi-Denmark.png"
          />
          <Card.Body>
            <Card.Title>#2 Rene Redzepi</Card.Title>
            <Card.Text>Denmark</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Powered by Perlage</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thebestchefawards.com/wp-content/uploads/2022/09/3-Joan-Roca-Spain.png"
          />
          <Card.Body>
            <Card.Title>#3 Joan Roca</Card.Title>
            <Card.Text>Spain</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Powered by Perlage</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thebestchefawards.com/wp-content/uploads/2022/09/4-Massimo-Bottura-Italy.png"
          />
          <Card.Body>
            <Card.Title>#4 Massimo Bottura</Card.Title>
            <Card.Text>Italy</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Powered by Perlage</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thebestchefawards.com/wp-content/uploads/2022/09/5-Andoni-Luis-Aduriz-Spain.png"
          />
          <Card.Body>
            <Card.Title>#5 Andoni Luis Aduriz</Card.Title>
            <Card.Text>Spain</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Powered by Perlage</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default BestChef;
