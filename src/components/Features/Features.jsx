import { Row, Col, Image } from "react-bootstrap";
import accessibility from '../../assets/access.png';
import payment from '../../assets/Payment.png';
import reviews from '../../assets/Reviews.png';

import './Features.css';

const Features = () => {
  return (
    <Row className="mb-4">
        <div className=" my-4 d-flex justify-content-center align-items-center shadow-sm rounded">
            <h2 className="fw-bold">Our Features</h2>
        </div>
        <Col md={4}>
            <div className="my-2 box border rounded">
                <div className="box-container d-flex">
                    <div>
                        <Image
                        className="img-fluid"
                        style={{width: '90%', height: '90%', objectFit: 'cover'}} 
                        src={accessibility} 
                        alt="Access products" 
                        fluid rounded />
                    </div>
                    <div>
                        <h3 style={{color: '#212121'}}>Easy Accessibility of Products</h3>
                        <p style={{color: '#757575'}}>Access fresh produce from the comfort of your home.</p>
                    </div>
                </div>
            </div>
        </Col>
        <Col md={4}>
        <div className=" my-2 box border rounded">
            <div className="box-container d-flex">
                <div>
                    <Image
                    className="img-fluid"
                    style={{width: '90%', height: '90%', objectFit: 'cover'}} 
                    src={reviews} 
                    alt="Access products" 
                    fluid rounded />
                </div>
                <div>
                    <h3 style={{color: '#212121'}}>Product Reviews</h3>
                    <p style={{color: '#757575'}}>Enhance trust and transparency within the marketplace</p>
                </div>
            </div>
        </div>
        </Col>
        <Col md={4}>
        <div className="my-2 box border rounded">
            <div className="box-container d-flex">
                <div>
                    <Image
                    className="img-fluid"
                    style={{width: '90%', height: '90%', objectFit: 'cover'}} 
                    src={payment} 
                    alt="Access products" 
                    fluid rounded />
                </div>
                <div>
                    <h3 style={{color: '#212121'}}>Secure Payment Gateways</h3>
                    <p style={{color: '#757575'}}> Online purchase transactions are very secure</p>
                </div>
            </div>
        </div>
        </Col>
    </Row>
  )
}

export default Features;