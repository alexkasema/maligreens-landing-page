import {Row, Col, Image} from 'react-bootstrap'
import fruitsVegs from '../../assets/fruitsVegs1.jpg'
import './AboutUs.css';

const AboutUs = () => {
    const url = 'https://maligreens.onrender.com/';
  return (
    <div className='mt-6'>
        <Row>
            <a id='about'></a>
            <Col md={6}>
                <div className="about-left">
                    <div className="about-image">
                    <Image
                        className="img-fluid"
                        style={{width: '90%', height: '600px', objectFit: 'cover'}} 
                        src={fruitsVegs} 
                        alt="About products" 
                        fluid 
                        rounded />
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="about-right">
                    <div className="container-box">
                        <h3 className="fw-bold">About Us</h3>
                        <p className="mt-3">The desire to bridge the gap between rural farmers and urban consumers, to recreate that sense of community and connection, became our driving force.</p>
                        <p>
                        And so, MaliGreens was born—a digital sanctuary where farmers, vendors, and consumers come together to celebrate the beauty of fresh produce.
                        Inspired by the resilience of small-scale farmers and the growing demand for sustainable, locally sourced food, Maligreens aims to empower both producers and consumers alike.
                        </p>
                        <p>
                        With each click and each purchase, We hope to reignite the bond between those who till the land and those who savor its fruits.
                        </p>
                        <p>
                        MaliGreens is not just a project; it's a journey—a journey back to the land, back to our shared roots, and back to the essence of what truly nourishes us. Join us on this adventure as we cultivate a brighter, greener future together.
                        </p>
                        <a href={url} target='_blank'>
                            <button className="bg_button text-white fw-bold mt-3">Go To MarketPlace</button>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default AboutUs;