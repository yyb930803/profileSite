const Portfolio = () => {
    const data = [
        { url: "/image/1.jpg", name: "BATTLE OF BRAVES", role: "Lead Designer" },
        { url: "/image/2.jpg", name: "BARLOG", role: "Designer" },
        { url: "/image/3.jpg", name: "FLAGSHIP MOUNTAIN", role: "Independent" },
        { url: "/image/4.jpg", name: "TOKI TOP", role: "Designer" },
        { url: "/image/5.jpg", name: "AUTOCAT", role: "Designer" },
        { url: "/image/6.jpg", name: "MASTER LEAGUE", role: "Designer" },
    ]
    return (
        <div className='container-fluid'>
            <div className="header-pin"></div>
            <div className="row p-4" style={{ borderBottom: '1px solid white' }}>
                <div className="col-md-12">
                    <div className="font-one fw-bold fst-italic">PORTFOLIO</div>
                </div>
            </div>
            <div className="row p-4">
                {data.map((item, index) => (
                    <div key={index} className="col-md-6 p-2">
                        <div className="card-img">
                            <div className="bg-img" style={{ backgroundImage: `url(${item.url})` }}>
                                <div className="bg-grad">
                                    <a href="/detail"><img src="/image/basic.jpg" style={{ width: '100%', opacity: 0 }} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="font-two fw-bold fst-italic p-2">{item.name}</div>
                        <div className="font-three p-2 pb-4">{item.role}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
