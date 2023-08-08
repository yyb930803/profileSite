import { useState } from "react";
import validator from 'validator'

const About = () => {
    const [emailError, setEmailError] = useState(false)
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    return (
        <div className='container-fluid'>
            <div className="header-pin"></div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className='d-flex align-items-center justify-content-start p-4'>
                    <div className="font-one fw-bold fst-italic">KIM TATE</div>
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
                <div className="font-six">GAME DESIGNER</div>
            </div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-6 p-4">
                    <div className="font-six fw-bold">SHORT SUMMARY</div>
                    <br />
                    <div className="font-three">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                        <br />
                        <br />
                        This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </div>
                </div>
                <div className="col-md-6 p-4" style={{ textAlign: 'center' }}>
                    <img src="/image/16.jpg" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }} />
                </div>
            </div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-6 p-4" style={{ borderRight: '1px solid white' }}>
                    <div className="font-six fw-bold">EDUCATION</div>
                    <br />
                    <div className="font-three">
                        BA NHTV University of Applied Sciences
                        <br />
                        BSc in International Game Architecture and Design
                    </div>
                </div>
                <div className="col-md-6 p-4">
                    <div className="font-six fw-bold">SKILLS</div>
                    <br />
                    <div className="font-three">
                        Advanced: Photoshop, Unity 3D, Unreal Engine
                        <br />
                        Proficient: Maya, SketchUp, Audacity, VR/AR Development.
                    </div>
                </div>
            </div>
            <div className="row p-4" id="contact">
                <div className="col-md-12 pt-4 font-four fw-bold fst-italic" style={{ textAlign: 'center' }}>LET'S PLAY!</div>
                <div className="col-md-12 p-2 font-six" style={{ textAlign: 'center' }}>FEEL FREE TO CONTACT ME FOR FUTURE WORK AND PARTNERSHIPS</div>
            </div>
            <div className="row p-4 justify-content-center">
                <div className="col-md-4">
                    <span className="font-three">First Name</span>
                    <div><input className="c-input" /></div>
                </div>
                <div className="col-md-4">
                    <span className="font-three">Last Name</span>
                    <div><input className="c-input" /></div>
                </div>
            </div>
            <div className="row p-4 justify-content-center">
                <div className="col-md-4">
                    <span className="font-three">Email*</span>
                    <div><input onChange={(e) => validateEmail(e)} className={emailError ? 'c-input email-input' : 'c-input'} /></div>
                </div>
                <div className="col-md-4">
                    <span className="font-three">Subject</span>
                    <div><input className="c-input" /></div>
                </div>
            </div>
            <div className="row p-4 justify-content-center">
                <div className="col-md-8">
                    <span className="font-three">Leave me a message...</span>
                    <div><textarea rows={5} className="c-input" /></div>
                </div>
                <div className="col-md-8" style={{ textAlign: 'center' }}>
                    <div className="c-btn">Submit</div>
                </div>
            </div>
        </div>
    )
}

export default About;
