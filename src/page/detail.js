import { useState } from "react";
import ImageView from './../component/imageView.js';

const Detail = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(1);
    const [imageData, setImageData] = useState([]);

    const imageView = (id, active) => {
        if (id === 1) {
            setImageData(firstData);
            setActive(active);
        } else if (id === 2) {
            setImageData(secondData);
            setActive(active);
        } else {
            setImageData(thirdData);
            setActive(active);
        }
        setShow(true);
    }

    const firstData = [
        {url: '/image/1.jpg', title: 'I’m an image title.', description: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.'},
        {url: '/image/2.jpg', title: 'I’m an image title.', description: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.'},
    ];

    const secondData = [
        {url: '/image/10.jpg', title: 'I’m an image title.', description: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.'},
    ];

    const thirdData = [
        {url: '/image/8.jpg', title: 'KATANNA', description: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.'},
        {url: '/image/9.jpg', title: 'ANDROID 13', description: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.'},
    ];

    return (
        <div className='container-fluid'>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-12">
                    <div className="font-one fw-bold fst-italic">BATTLE OF BRAVES</div>
                </div>
            </div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-6 border-one">
                    <div className="">
                        <div className="pb-4">
                            <div className="font-three fw-bold">ROLE</div>
                            <div className="font-three">Lead Designer</div>
                        </div>
                        <div className="pb-4">
                            <div className="font-three fw-bold">DESCRIPTION</div>
                            <div className="font-three">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-2">
                        <div className="p-3">
                            <div className="font-three fw-bold">YEAR</div>
                            <div className="font-three">2023</div>
                        </div>
                        <div className="p-3">
                            <div className="font-three fw-bold">GENRE</div>
                            <div className="font-three">Battle Royal</div>
                        </div>
                        <div className="p-3">
                            <div className="font-three fw-bold">PLATFORM</div>
                            <div className="font-three">PlayStation</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-6">
                    <div className="p-2">
                        <a style={{ cursor: 'pointer' }} onClick={() => imageView(1, 1)}>
                            <img src="/image/1.jpg" style={{ width: '100%', borderRadius: '20px' }} />
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-2">
                        <a style={{ cursor: 'pointer' }} onClick={() => imageView(1, 2)}>
                            <img src="/image/7.jpg" style={{ width: '100%', borderRadius: '20px' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row ps-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-12 p-4">
                    <div className="font-four fw-bold fst-italic">LEVEL DESIGN</div>
                </div>
            </div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-12">
                    <div className="p-2">
                        <a style={{ cursor: 'pointer' }} onClick={() => imageView(2, 1)}>
                            <img src="/image/10.jpg" style={{ width: '100%', borderRadius: '20px' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row ps-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-12 p-4">
                    <div className="font-four fw-bold fst-italic">CHARACTERS</div>
                </div>
            </div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-6">
                    <div className="card-img">
                        <div className="bg-img" style={{ backgroundImage: `url(/image/8.jpg)` }}>
                            <div className="bg-grad">
                                <a style={{ cursor: 'pointer' }} onClick={() => imageView(3, 1)}><img src="/image/basic.jpg" style={{ width: '100%', opacity: 0 }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="font-two fw-bold fst-italic p-2">KATANNA</div>
                </div>
                <div className="col-md-6">
                    <div className="card-img">
                        <div className="bg-img" style={{ backgroundImage: `url(/image/9.jpg)` }}>
                            <div className="bg-grad">
                                <a style={{ cursor: 'pointer' }} onClick={() => imageView(3, 2)}><img src="/image/basic.jpg" style={{ width: '100%', opacity: 0 }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="font-two fw-bold fst-italic p-2">ANDROID 13</div>
                </div>
            </div>
            <div className="row p-4 pt-5 pb-5">
                <div className="col-6 font-five fst-italic fw-bold page">
                    <div className='row'>
                        <div className='col-md-2'>
                            <svg className='page-icon' style={{ transform: 'rotate(180deg)' }} preserveAspectRatio="xMidYMid meet" data-bbox="12.794 29.4 172.406 141" viewBox="12.794 29.4 172.406 141" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l2ycx13fi6u">
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
                        <div className='col-md-6'>PREVIOUS GAME</div>
                    </div>
                </div>
                <div className="col-6 font-five fst-italic fw-bold text-end page">
                    <div className='row justify-content-end'>
                        <div className='col-md-2 order-md-2'>
                            <svg className='page-icon' preserveAspectRatio="xMidYMid meet" data-bbox="12.794 29.4 172.406 141" viewBox="12.794 29.4 172.406 141" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l2ycx13fi6u">
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
                        <div className='col-md-6 order-md-1'>NEXT GAME</div>
                    </div>
                </div>
            </div>
            <ImageView imageData={imageData} show={show} setShow={setShow} active={active} setActive={setActive} />
        </div>
    )
}

export default Detail;
