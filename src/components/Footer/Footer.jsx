
import logo from '../../assets/maligreens.png';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const url = 'https://maligreens.onrender.com/';
    const linkedIn = 'https://www.linkedin.com/in/alexkasema/'
    const x = 'https://twitter.com/LexMulwa'
    const github = 'https://github.com/alexkasema'
    const maligreens = 'https://github.com/alexkasema/maligreens'
  return (
    <footer className="footer-section mt-5">
        <div className="container">
            <a id='contact'></a>
            <div className="footer-cta pt-5 pb-5">
                <div className="row ">
                    <div className="single-cta">
                        <h2>Find out more about us</h2>
                    </div>
                    <div className="col-xl-3 col-md-3 mb-30">
                        <div className="single-cta">
                            <a href={linkedIn} target='_blank'><i class=" fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 mb-30">
                        <div className="single-cta">
                            <a href={x} target='_blank'><i class=" fa-brands fa-square-x-twitter"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 mb-30">
                        <div className="single-cta">
                            <a href={github} target='_blank'><i class="fa-brands fa-square-github"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 mb-30">
                        <div className="single-cta">
                            <a href="mailto:lexmulwa@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-logo">
                        <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                        </div>
                        <div className="footer-text">
                        <p>MaliGreens is a platform that connects farmers and vendors to consumers. We provide a marketplace for farmers to showcase their harvest and for vendors to sell fresh produce. Our aim is to foster a vibrant marketplace for fresh produce and empower farmers and vendors to reach a wider audience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href={maligreens} target='_blank'>GitHub Project Repository</a></li>

                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Visit Market Place</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p>Join us on this adventure as we cultivate a brighter, greener future together.</p>
                        </div>
                        <a href={url} target='_blank'>
                            <button className="bg_button text-white fw-bold mt-3">Go To MarketPlace</button>
                        </a>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright © {year}, All Right Reserved</p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer;