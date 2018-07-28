import React, { Component } from 'react';
import '../styles/Carousel.css';

class Carousel extends Component {
    render () {
        return (
            <div id="homepage-carousel" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#homepage-carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#homepage-carousel" data-slide-to="1"></li>
                    <li data-target="#homepage-carousel" data-slide-to="2"></li>
                </ul>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                    {/* Fix the images not loading here */}
                        <img src="../resources/carousel-images/beach.jpg" alt="beach"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../resources/carousel-images/fireworks.jpg" alt="fireworks"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../resources/carousel-images/forest.jpg" alt="forest"/>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#homepage-carousel" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#homepage-carousel" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        );
    }
}

export default Carousel;