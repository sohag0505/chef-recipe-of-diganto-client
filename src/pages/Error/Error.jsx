import React from "react";
import { Card, Container } from "react-bootstrap";

const Error = () => {
  return (
    <Container>
      <div className="text-center m--4">
        <h2 className="text-danger">OPS!!!</h2>
        <h3>Sorry...Please you can write correct path. Thanks.</h3>
      </div>
      <Card.Img
        variant="top"
        src="https://as1.ftcdn.net/v2/jpg/04/21/05/80/1000_F_421058012_TsV76QVuJhignu12Ei9VHpeWDWjHmeA6.jpg"
        height={600}
      />
    </Container>
  );
};

export default Error;
