

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='text-center'>
              <ul>
                <li><Link to='/'>terms and conditions</Link></li>
                <li><Link to='/'>game addictions</Link></li>
                <li><Link to='/'>privacy policy</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
