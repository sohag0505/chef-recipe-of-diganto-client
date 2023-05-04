import React from "react";
import { Button, Container } from "react-bootstrap";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [16, 10],
  };
  return (
    <div>
      <Container className="mt-4">
        <div>
          <ReactToPdf
            targetRef={ref}
            filename="div-blue.pdf"
            options={options}
            x={0.5}
            y={0.5}
            scale={1}
          >
            {({ toPdf }) => (
              <Button variant="outline-success" onClick={toPdf}>
                Generate pdf
              </Button>
            )}
          </ReactToPdf>

          <div ref={ref}>
            <h2 className="text-center">Answer and Question</h2>
            <div className="border border-primary p-4 mt-4">
              <div className="mt-4">
                <h5>
                  1. Differences between uncontrolled and controlled components?
                </h5>
                <p>
                  In React, controlled components refer to components that have
                  their state and behavior controlled by the parent component.
                  These components rely on props passed down from the parent
                  component to update their state and behavior. Uncontrolled
                  components refer to components that manage their own state
                  internally.
                </p>
              </div>
              <div className="mt-4">
                <h5>2. How to validate React props using PropTypes?</h5>
                <p>
                  Props and PropTypes are important mechanisms for passing
                  read-only attributes between React components. We can use
                  React props, short for properties, to send data from one
                  component to another. If a component receives the wrong type
                  of props, it can cause bugs and unexpected errors in your app.
                </p>
              </div>
              <div className="mt-4">
                <h5>
                  3. Tell us the difference between nodejs and express js?
                </h5>
                <p>
                  NodeJS is the package, which provides the JavaScript run-time
                  environment, whereas Express is a framework that sits on top
                  of NodeJS and helps us to handle requests and responses.
                </p>
              </div>
              <div className="mt-4">
                <h5>
                  4. What is a custom hook, and why will you create a custom
                  hook?
                </h5>
                <p>
                  Custom React JS hooks offer reusability as when a custom hook
                  is created, it can be reused easily, which makes the code
                  cleaner and reduces the time to write the code. It also
                  enhances the rendering speed of the code as a custom hook does
                  not need to be rendered again and again while rendering the
                  whole code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
