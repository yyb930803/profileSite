import { useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";

const ImageView = ({ imageData, show, setShow, active, setActive }) => {
    const zoom = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    const left = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    }

    const right = () => {
        if (active < imageData.length) {
            setActive(active + 1)
        }
    }

    useEffect(() => {
        if (!show && document.exitFullscreen) {
            document.exitFullscreen();
        }
    }, [show]);

    return (
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <div className="lap-modal">
                <Modal.Body className="d-flex align-items-center justify-content-between">
                    <div className="btn position-fixed top-0 start-0 p-4" onClick={zoom}><img src="/image/zoom.jpg" /></div>
                    <div className="btn position-fixed top-0 end-0 p-4" onClick={() => setShow(false)}><img src="/image/cancel.jpg" /></div>
                    {imageData.map((item, index) => (
                        <div key={index} className={(index + 1 === active) ? "row p-5" : "row p-5 opacity"} style={{ height: '100%' }}>
                            <div className="col-8 d-flex align-items-center justify-content-between">
                                <div className={(active === 1) ? "hidden btn" : "btn"} onClick={() => left()}>
                                    <img src="/image/left.jpg" />
                                </div>
                                <div className={(index + 1 === active) ? "modal-img" : "modal-img fade"} style={{ backgroundImage: `url(${item.url})` }}>
                                    <a><img src="/image/basic.jpg" style={{ width: '100%', opacity: 0 }} /></a>
                                </div>
                                <div className={(active === imageData.length) ? "hidden btn" : "btn"} onClick={() => right()}>
                                    <img src="/image/right.jpg" />
                                </div>
                            </div>
                            <div className="col-4 p-5">
                                <div className="font-two fst-italic fw-bold p-4">{item.title}</div>
                                <div className="p-4">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </Modal.Body>
            </div>
            <div className="mobile-modal">
                <Modal.Body className="">
                    <div className="p-3">
                        <div className="btn" onClick={() => setShow(false)}><img src="/image/arrow.jpg" /></div>
                    </div>
                    <Carousel touch={true} wrap={false} indicators={false} controls={false} interval={null}>
                        {imageData.map((item, index) => (
                            <Carousel.Item>
                                <div className="modal-img" style={{ backgroundImage: `url(${item.url})` }}>
                                    <a><img src="/image/basic.jpg" style={{ width: '100%', opacity: 0 }} /></a>
                                </div>
                                <div className="p-2">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </div>
        </Modal>
    )
}

export default ImageView;
