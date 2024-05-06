import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import logo from '../../assets/maligreens.png';
import './Header.css';

const Header = () => {
  const url = 'https://maligreens.onrender.com/';
  return (
    <div>
        <Navbar expand="md" className="bg-transparent shadow-sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{width:"10%", objectFit:'cover'}}/>
            Mali<span style={{color:'green'}}>Greens</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link href="#home" className='text-secondary fw-bold'>Home</Nav.Link>
              <Nav.Link href="#about" className='text-secondary fw-bold'>About Us</Nav.Link>
              <Nav.Link href="#contact" className='text-secondary fw-bold'>Contact</Nav.Link>
              <Nav.Link href={url} className='text-secondary fw-bold text-decoration-none border-0'>
                <Button  size="sm" className="bg_button fw-bold text-decoration-none border-0">Go To MarketPlace</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;