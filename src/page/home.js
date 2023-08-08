import { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Home = () => {
    const [key, setKey] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        handleVideo();
    }, [])

    const handleVideo = () => {
        if (intervalId) {
            return;
        }

        const newIntervalId = setInterval(() => {
            setKey(key => (key + 1) % 3);
        }, 7500);
        setIntervalId(newIntervalId);
    };

    const renderSwitch = (key) => {
        switch (key) {
            case 0:
                return 'https://video.wixstatic.com/video/c837a6_d698f2211eba4e6c94efecd34041c98f/1080p/mp4/file.mp4';
            case 1:
                return 'https://video.wixstatic.com/video/c837a6_e65ba8980e144620b0606bf2c77e5aba/1080p/mp4/file.mp4';
            case 2:
                return 'https://video.wixstatic.com/video/c837a6_c71630b908474eaf9c5dd4184b771ac8/1080p/mp4/file.mp4';
            default:
                return 'https://video.wixstatic.com/video/c837a6_d698f2211eba4e6c94efecd34041c98f/1080p/mp4/file.mp4';
        }
    }

    const portfolios = [
        { id: "01", dex: "FIRST-PERSON SHOOTER", img: "/image/2.jpg", title: "BARLOG", role: "DESIGNER", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." },
        { id: "02", dex: "QUEST", img: "/image/3.jpg", title: "FLAGSHIP MOUNTAIN", role: "INDEPENDENT", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." },
        { id: "03", dex: "CASUAL GAME", img: "/image/11.jpg", title: "TOKI TOP", role: "DESIGNER", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." }
    ]

    const characters = [
        {url: '/image/12.jpg', name: 'ZORD', text: 'From Master League'},
        {url: '/image/13.jpg', name: 'THE SCARLET SORCERER', text: 'From Flagship Mountain'},
        {url: '/image/14.jpg', name: 'KATANNA', text: 'From Battle of the Braves'}
    ]

    return (
        <div>
            <SwitchTransition>
                <CSSTransition
                    key={key}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'
                >
                    <div className="home-one-sec" >
                        <img style={{ position: 'absolute', bottom: '0', width: '100%', height: '300px', zIndex: '1' }} src="https://static.wixstatic.com/media/c837a6_6a4404bdeeac41c2bf76d3925efd9fb8~mv2.png/v1/fill/w_1503,h_399,al_b,usm_0.66_1.00_0.01,enc_auto/c837a6_6a4404bdeeac41c2bf76d3925efd9fb8~mv2.png" />
                        <video autoplay="autoplay" muted loop>
                            <source src={renderSwitch(key)} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <div className='container-fluid'>
                <div className="row p-4" style={{ height: '100vh' }}>
                    <div className="col-md-12 home-title" style={{ zIndex: '2' }}>
                        <p className="font-six">GAME DESIGNER</p>
                        <p className="font-seven fw-bold fst-italic">KIM TATE</p>
                        <p className="font-six" style={{ maxWidth: '554px' }}>I'm a California based cross platform game designer that specializes in character & level design</p>
                    </div>
                    <div className="col-md-12 d-flex align-items-center" style={{ zIndex: '2' }}>
                        <div className="d-flex align-items-center justify-content-md-start">
                            <div className="col-md-auto small-img" style={{ backgroundImage: `url(/image/7.jpg)` }} >
                            </div>
                            <div className="align-middle" style={{ marginLeft: '20px' }}>
                                <p className="font-six fw-bold">My Latest Work</p>
                                <p className="font-six">Battle of Braves | PlayStation | 2023</p>
                                <div className='d-flex align-items-center justify-content-md-start cr-mt'>
                                    <div className='font-six' style={{ marginRight: '20px' }}>View game</div>
                                    <div className=''>
                                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.794 29.4 172.406 141" viewBox="12.794 29.4 172.406 141" height="32" width="39" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l2ycx13fi6u">
                                            <defs>
                                                <style>
                                                </style>
                                            </defs>
                                            <title id="svgcid--9l2ycx13fi6u"></title>
                                            <g>
                                                <path d="M114.8 170.4c-32.5 0-60.6-22-68.4-53.5-.3-1.2.4-2.4 1.7-2.8 1.2-.3 2.4.4 2.8 1.7 7.3 29.4 33.6 50 63.9 50 36.3 0 65.9-29.6 65.9-65.9S151.1 34 114.8 34c-31.2 0-58.3 22.1-64.5 52.6-.3 1.2-1.5 2-2.7 1.8-1.2-.3-2-1.5-1.8-2.7 6.7-32.6 35.7-56.3 69-56.3 38.8 0 70.4 31.6 70.4 70.4s-31.5 70.6-70.4 70.6z" fill="#f6f3ed" data-color="1"></path>
                                                <path d="M146.6 98.4L111.3 63c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l29.5 29.5c.7.7.2 2-.8 2H15.2c-1.2 0-2.3.9-2.4 2.2-.1 1.3 1 2.4 2.3 2.4h121.6c1.1 0 1.6 1.3.8 2L108 133.8c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l35.4-35.4c.9-.9.9-2.3 0-3.2z" fill="#caff00" data-color="2"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                    <div className="col-md-12 font-four fw-bold fst-italic">MY PORTFOLIO</div>
                </div>
                {portfolios.map((item, index) => (
                    <div className="row p-4" key={index} style={{ borderBottom: '1px solid white' }}>
                        <div className="col-md-2">
                            <div className="font-four fw-bold fst-italic">{item.id}</div>
                            <div className="font-three">{item.dex}</div>
                        </div>
                        <div className="col-md-10">
                            <img src={item.img} style={{ width: '100%', borderRadius: '20px' }} />
                            <div className='d-flex align-items-center justify-content-md-start cr-mt'>
                                <div className="font-four fw-bold fst-italic">{item.title}</div>
                                <div>
                                    <svg className='page-icon-two' preserveAspectRatio="xMidYMid meet" data-bbox="12.794 29.4 172.406 141" viewBox="12.794 29.4 172.406 141" height="32" width="39" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l2ycx13fi6u">
                                        <defs>
                                            <style>
                                            </style>
                                        </defs>
                                        <title id="svgcid--9l2ycx13fi6u"></title>
                                        <g>
                                            <path d="M114.8 170.4c-32.5 0-60.6-22-68.4-53.5-.3-1.2.4-2.4 1.7-2.8 1.2-.3 2.4.4 2.8 1.7 7.3 29.4 33.6 50 63.9 50 36.3 0 65.9-29.6 65.9-65.9S151.1 34 114.8 34c-31.2 0-58.3 22.1-64.5 52.6-.3 1.2-1.5 2-2.7 1.8-1.2-.3-2-1.5-1.8-2.7 6.7-32.6 35.7-56.3 69-56.3 38.8 0 70.4 31.6 70.4 70.4s-31.5 70.6-70.4 70.6z" fill="#f6f3ed" data-color="1"></path>
                                            <path d="M146.6 98.4L111.3 63c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l29.5 29.5c.7.7.2 2-.8 2H15.2c-1.2 0-2.3.9-2.4 2.2-.1 1.3 1 2.4 2.3 2.4h121.6c1.1 0 1.6 1.3.8 2L108 133.8c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l35.4-35.4c.9-.9.9-2.3 0-3.2z" fill="#caff00" data-color="2"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <p className="font-six">{item.role}</p>
                            <div className="font-three" style={{ maxWidth: '542px' }}>{item.description}</div>
                            <div className="c-btn">View Game</div>
                        </div>
                    </div>
                ))}
                <div className='d-flex align-items-center justify-content-end p-4'>
                    <div className="font-two fw-bold fst-italic page">VIEW ALL GAMES</div>
                    <div>
                        <svg className='page-icon-two' preserveAspectRatio="xMidYMid meet" data-bbox="12.794 29.4 172.406 141" viewBox="12.794 29.4 172.406 141" height="32" width="39" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l2ycx13fi6u">
                            <defs>
                                <style>
                                </style>
                            </defs>
                            <title id="svgcid--9l2ycx13fi6u"></title>
                            <g>
                                <path d="M114.8 170.4c-32.5 0-60.6-22-68.4-53.5-.3-1.2.4-2.4 1.7-2.8 1.2-.3 2.4.4 2.8 1.7 7.3 29.4 33.6 50 63.9 50 36.3 0 65.9-29.6 65.9-65.9S151.1 34 114.8 34c-31.2 0-58.3 22.1-64.5 52.6-.3 1.2-1.5 2-2.7 1.8-1.2-.3-2-1.5-1.8-2.7 6.7-32.6 35.7-56.3 69-56.3 38.8 0 70.4 31.6 70.4 70.4s-31.5 70.6-70.4 70.6z" fill="#f6f3ed" data-color="1"></path>
                                <path d="M146.6 98.4L111.3 63c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l29.5 29.5c.7.7.2 2-.8 2H15.2c-1.2 0-2.3.9-2.4 2.2-.1 1.3 1 2.4 2.3 2.4h121.6c1.1 0 1.6 1.3.8 2L108 133.8c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l35.4-35.4c.9-.9.9-2.3 0-3.2z" fill="#caff00" data-color="2"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                    <div className="col-md-12 font-four fw-bold fst-italic">CHARACTERS</div>
                </div>
                <div className="row p-4">
                    {characters.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card-img">
                                <div className="bg-img" style={{ backgroundImage: `url(${item.url})` }}>
                                    <div className="bg-grad">
                                        <a style={{ cursor: 'pointer' }}><img src="/image/basic1.jpg" style={{ width: '100%', opacity: 0 }} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="font-two fw-bold fst-italic p-2">{item.name}</div>
                            <div className="font-three p-2">{item.text}</div>
                        </div>
                    ))}
                </div>
                <div className='d-flex align-items-center justify-content-end p-4'>
                    <div className="font-two fw-bold fst-italic page">VIEW ALL CHARACTERS</div>
                    <div>
                        <svg className='page-icon-two' preserveAspectRatio="xMidYMid meet" data-bbox="12.794 29.4 172.406 141" viewBox="12.794 29.4 172.406 141" height="32" width="39" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l2ycx13fi6u">
                            <defs>
                                <style>
                                </style>
                            </defs>
                            <title id="svgcid--9l2ycx13fi6u"></title>
                            <g>
                                <path d="M114.8 170.4c-32.5 0-60.6-22-68.4-53.5-.3-1.2.4-2.4 1.7-2.8 1.2-.3 2.4.4 2.8 1.7 7.3 29.4 33.6 50 63.9 50 36.3 0 65.9-29.6 65.9-65.9S151.1 34 114.8 34c-31.2 0-58.3 22.1-64.5 52.6-.3 1.2-1.5 2-2.7 1.8-1.2-.3-2-1.5-1.8-2.7 6.7-32.6 35.7-56.3 69-56.3 38.8 0 70.4 31.6 70.4 70.4s-31.5 70.6-70.4 70.6z" fill="#f6f3ed" data-color="1"></path>
                                <path d="M146.6 98.4L111.3 63c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l29.5 29.5c.7.7.2 2-.8 2H15.2c-1.2 0-2.3.9-2.4 2.2-.1 1.3 1 2.4 2.3 2.4h121.6c1.1 0 1.6 1.3.8 2L108 133.8c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l35.4-35.4c.9-.9.9-2.3 0-3.2z" fill="#caff00" data-color="2"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
