import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Container, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: red;
margin: 20px;
border: 3px solid black;
`
export default function BootSample() {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      BootSample
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="success">Primary</Button>
      <Button variant="warning">Primary</Button>
      <Button variant="danger">Primary</Button>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>show alert</Button>}
      <DropdownButton
        title="sex"
        variant="secondary"
        className="mt-2"
        data-bs-theme="light"
      >
        <Dropdown.Item>opt 1</Dropdown.Item>
        <Dropdown.Item>opt 2</Dropdown.Item>
        <Dropdown.Item>opt 3</Dropdown.Item>
      </DropdownButton>
      <div class="container-sm bg-primary">
        100% wide until small breakpoint
      </div>
      <div class="container-md bg-secondary">
        100% wide until medium breakpoint
      </div>
      <div class="container-lg bg-success">
        100% wide until large breakpoint
      </div>
      <div class="container-xl bg-danger">
        100% wide until extra large breakpoint
      </div>
      <div class="container-xxl bg-warning">
        100% wide until extra extra large breakpoint
      </div>
      <div class="container-fluid bg-primary">
        100% wide until extra extra large breakpoint
      </div>
      <Container>
        <Row>
          <Col>1/1</Col>
          <Col>1/2</Col>
        </Row>
        <Row>
          <Col xs={10}>2/1</Col>
          <Col>2/2</Col>
        </Row>
      </Container>
      <div className="containersample">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>


      </div>
    </Wrapper>
  );
}
