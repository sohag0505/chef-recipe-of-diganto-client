import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const ExtraSection = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Countries With Best Chefs</h2>
      </div>
      <CardGroup className="mt-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://static.thetoptens.com/img/lists/18lg.jpg"
            className="w-75 mx-auto border border-drak mt-2"
            height={300}
          />
          <Card.Body>
            <Card.Title>France</Card.Title>
            <Card.Text>
              France, officially the French Republic, is a sovereign state
              comprising territory in western Europe and several overseas
              regions and territories. The European part of France, called
              metropolitan France.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://static.thetoptens.com/img/lists/10lg.jpg"
            className="w-75 mx-auto  border border-drak mt-2"
            height={300}
          />
          <Card.Body>
            <Card.Title>United Kingdom</Card.Title>
            <Card.Text>
              The United Kingdom of Great Britain and Northern Ireland, commonly
              shortened to United Kingdom, UK or Britain is a Sovereign State
              located of the Northwestern coast of Europe.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://static.thetoptens.com/img/lists/13lg.jpg"
            className="w-75 mx-auto border border-drak mt-2"
            height={300}
          />
          <Card.Body>
            <Card.Title>Japan</Card.Title>
            <Card.Text>
              Japan is an island country in East Asia in the Pacific Ocean. It
              lies off the eastern coast of the Asia Mainland and stretching
              from the Sea of Okhotsk in the north to the East China Sea and
              near Taiwan in the southwest.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <div></div>
    </div>
  );
};

export default ExtraSection;
