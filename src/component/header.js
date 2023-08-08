import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [offset, setOffset] = useState(0);
    const [pathname, setPathname] = useState('');

    let location = useLocation();
    
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setPathname(location.pathname + location.hash);
    }, [location])

    const openNav = () => {
        document.getElementById("nav").style.height = "100%";
        document.getElementById("nav").style.opacity = "1";
    }

    const closeNav = () => {
        document.getElementById("nav").style.height = "0%";
        document.getElementById("nav").style.opacity = "0";
    }

    return (
        <div>
            <div className={offset > 10 ? "container-fluid add-header-bg" : "container-fluid"} style={{ borderBottom: '1px solid white', position: 'fixed', zIndex: '100' }}>
                <div className="header d-flex align-items-center justify-content-between">
                    <a href='/' className="logo" >K.T.</a>
                    <div className="header-right">
                        <HashLink className={pathname === '/portfolio' ? 'active': ''} to="/portfolio">PORTFOLIO</HashLink>
                        <HashLink className={pathname === '/about#top' ? 'active': ''} exact='true' to="/about#top">ABOUT</HashLink>
                        <HashLink className={pathname === '/about#contact' ? 'active': ''} exact='true' to="/about#contact">CONTACT</HashLink>
                    </div>
                    <div className="header-right-mobile">
                        <span style={{ fontSize: "25px", cursor: "pointer", color: "white" }} onClick={openNav}>&#9776;</span>
                    </div>
                </div>
            </div>
            <div id="nav" className="overlay">
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <HashLink activeclassname="active" to="/portfolio">PORTFOLIO</HashLink>
                    <HashLink exact='true' to="/about">ABOUT</HashLink>
                    <HashLink exact='true' to="/">CONTACT</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Header;
