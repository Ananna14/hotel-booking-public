import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'
// import cover from '../../../images/banner'
// import banner from '../../../images/feature-8'
// import third from '../../../images/room-1'


const Banner = () => {
    return (
        <div className="banner-added">

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/intro/img/features/feature-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/chalet-wordpress-theme/wp-content/uploads/sites/7/2017/09/room5-1024x664.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/chalet-wordpress-theme/wp-content/uploads/sites/7/2017/09/room6-1024x664.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Banner
