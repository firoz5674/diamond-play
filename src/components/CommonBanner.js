

import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import logo from "../assets/images/diamond-logo.png";

function CommonBanner({subHeading, heading, info}) {
  return (
    <section className='common-banner'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='common-banner__content'>
              <img src={logo} className="logo" alt="" />
              <h4 className='play-text'>{subHeading}</h4>
              <Button className='whatsapp-btn'>whatsapp now</Button>
              <h2 className='title'>{heading}</h2>
              <p className='info'>{info}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CommonBanner;
