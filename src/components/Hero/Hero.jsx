import { Row, Col, Container } from 'react-bootstrap';
import marketplace from '../../assets/marketplace.jpg';
import Features from '../Features/Features';
import './Hero.css';

const Hero = () => {
  return (
    <div className='mt-5'>
        <Container>
            <Row>
                <Col md={6}>
                    <div className="hero-left">
                        <h1 className="fw-bold">Welcome to Mali<span style={{color:'green'}}>Greens</span></h1>
                        <hr />
                        <div className="hero-description w-90 mt-2">
                            <h2>Empowering <span style={{color:'#4CAF50'}}>farmers</span> and <span style={{color:'#4CAF50'}}>vendors</span> to showcase their harvest, fostering a vibrant marketplace for fresh produce.</h2>
                            <button className="bg_button text-white fw-bold mt-3">Go To MarketPlace</button>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="hero-right">
                        <div className="image-container d-flex justify-content-center align-items-center shadow-sm rounded">
                            <img src={marketplace} alt="market place" className="hero-image rounded img-fluid" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Features />
        </Container>
    </div>
  )
}

export default Hero;