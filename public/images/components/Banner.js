import React, { Component } from 'react'

class Banner extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src="./images/mern1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/mern1b.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/mern4.png" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/mean.jpg" alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/fs5.jpg" alt="Fifth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/fs6.png" alt="Sixth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/fs7.jpg" alt="Seventh slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="./images/fs8.jpg" alt="Eighth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default Banner;