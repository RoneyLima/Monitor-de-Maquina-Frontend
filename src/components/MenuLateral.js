
import { useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

export default function TabsMenu() {

  const [key, setKey] = useState('home');

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={5}>
          <Nav variant="tabs" href="/A" className="flex-column">
              <Nav.Item>
                <Nav.Link >Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
        </Col>
      </Row>
    </Tab.Container>
  )
}