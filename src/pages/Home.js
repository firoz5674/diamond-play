
import { Container, Row, Col } from 'reactstrap';
import instaIcon from "../assets/images/instagram.png";
import teleIcon from "../assets/images/telegram.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import CommonBanner from '../components/CommonBanner';
import Link from "react-router-dom";

function Home() {
  return (
    <main className='home-main'>
      <CommonBanner subHeading="diamond play - get ypur trusted online id" heading="5% extra on new id trusted online cricket id provider 10% bonus" info="India's no. 1 online sports games promoter. Get your ID within 2 minutes! Join Most Trusted, Secure & Fastest Book of India." />
      <section className='welcome-section'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='welcome-text'>
                <h1 className='welcome-title'>welcome in the family of <span>diamond play - oldest fantasy sports provider</span></h1>
                <p className='welcome-info'>Get in touch with Diamond Play for any Queries, Emergencies, Feedback, or Complaints. We are here to help you 24*7 with our services on WhatsApp.</p>
                <p className='welcome-info'>Welcome to Diamond play, we offer you a genuinely unique fantasy sports experience. Besides, We have a global network and provide the best industry experience with a single click.</p>
                <p className='welcome-info'>Diamond Play is a responsible fantasy sports promoter. We deal in all kinds of fantasy sports games. We have helped 50000+ players to find the best fantasy sports online.</p>
                <p className='welcome-info mb-5'>Our Company Works In A Very Transparent Way. Get Your Demo ID Now</p>
                <h2 className='welcome-title'>why choose us</h2>
                <ul>
                  <li>24*7 Support</li>
                  <li>Instant Reply</li>
                  <li>Most Trusted & Secure Platform</li>
                  <li>10 Lac+ Active Users</li>
                  <li>250+ Branches</li>
                  <li>Working Since 2010</li>
                </ul>
                <div className='social-media'>
                  <h4>Follow us</h4>
                  <ul>
                    <li><Link to='/' className='insta'><img src={instaIcon} alt="" /></Link></li>
                    <li><Link to='/' className='tele'><img src={teleIcon} alt="" /></Link></li>
                    <li><Link to='/' className='whatsapp'><img src={whatsappIcon} alt="" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
