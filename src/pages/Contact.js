

import React from 'react';
import CommonBanner from '../components/CommonBanner';
import { Container, Row, Col, Card } from 'reactstrap';
import locationIcon from "../assets/images/location.png";
import phoneIcon from "../assets/images/telephone.png";
import envelopeIcon from "../assets/images/email.png";

function Contact() {
  return (
    <>
      <CommonBanner subHeading="diamond cricket line book - get your trusted online ID" heading="trusted fantasy sports plattinum" info="India's no. 1 fantasy sports games promoter. Get your ID within 2 minutes! Join Most Trusted, Secure & Fastest Book of India." />
      <section className='contact'>
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <h4>Address:</h4>
                <div className='d-flex align-items-center'>
                  <img src={locationIcon} alt="" /> <span>Delhi, India</span>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <h4>Address:</h4>
                <div className='d-flex align-items-center'>
                  <img src={envelopeIcon} alt="" /> <span>info@diamond-play.in</span>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <h4>Address:</h4>
                <div className='d-flex align-items-center'>
                  <a href='https://wa.link/diamondplaysearch'><img src={phoneIcon} alt="" /> <span>Whatsapp</span></a>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
