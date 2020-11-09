import React from 'react'
import Slide1 from '../../assets/img/carousal/slide1.webp';
import Slide2 from '../../assets/img/carousal/slide2.webp';
import Slide3 from '../../assets/img/carousal/slide3.webp';
import Carousel from 'react-bootstrap/Carousel'
import ScrolDown from '../scroll-down/scroll-down.component'
import './my-carousal.css'

const MyCarousal = () => {
    return (
        <div id="home">
           <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
              <Carousel.Item>
              <img className="d-bloc w-100 custom-img" src={Slide1} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-bloc w-100 custom-img" src={Slide2} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-bloc w-100 custom-img" src={Slide3} alt="First slide"/>
              </Carousel.Item>
           </Carousel>
           <ScrolDown />
        </div>
    )
}

export default MyCarousal;
