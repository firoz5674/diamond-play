

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='text-center'>
              <ul>
                <li><a href='#'>terms and conditions</a></li>
                <li><a href='#'>game addictions</a></li>
                <li><a href='#'>privacy policy</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
