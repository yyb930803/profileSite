import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className='container-fluid' style={{ borderTop: '1px solid white' }}>
            <div className="row p-4">
                <div className="col-md-4 text-center text-md-start p-3">
                    <a href="/portfolio" style={{ textDecoration: 'none', color: 'white' }}>GAMES</a>
                </div>
                <div className="col-md-4 text-center p-3">
                    <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>ABOUT & CONTACT</a>
                </div>
                <div className="col-md-4 text-center text-md-end p-3">
                    <a href="https://facebook.com" style={{ textDecoration: 'none', color: 'white' }}>LINKEDIN, FACEBOOK, INSTAGRAM</a>
                </div>
            </div>
            <div className="row p-4">
                <div className="col-md-6 text-center text-md-end order-md-2 p-3">
                    <a href="#top" style={{ textDecoration: 'none', color: 'white' }}>
                        <Icon icon="bx:up-arrow-alt" color="white" />
                        BACK TO TOP
                    </a>
                </div>
                <div className="col-md-6 text-center text-md-start order-md-1 p-3">
                    <span style={{ textDecoration: 'none', color: 'white' }}>© 2023 BY KIM TATE. PROUDLY CREATED WITH <a href="wix.com" style={{ color: 'white' }}>WIX.COM</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
