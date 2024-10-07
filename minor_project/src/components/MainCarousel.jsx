import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage.jsx'; 

import image1 from '../assets/images/carouselImage1.jpg';
import image2 from '../assets/images/carouselImage2.jpg';
import image3 from '../assets/images/carouselImage3.jpg';

function MainCarousel() {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item className="carousel-item-height">
        <ExampleCarouselImage imageSrc={image1} altText="First slide image" style={{justifyContent: "center"}} />
        <Carousel.Caption>
          <h3 style={{textDecoration:"underline", fontWeight: "700"}}>Top-notch Elder Care</h3>
          <p style={{fontWeight: "500"}}>Compassionate care for the elderly.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item-height">
        <ExampleCarouselImage imageSrc={image2} altText="Second slide image" />
        <Carousel.Caption>
          <h3 style={{textDecoration:"underline", fontWeight: "700"}}>Home Services</h3>
          <p style={{fontWeight: "500"}}>Professional household workers at your service.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item-height">
        <ExampleCarouselImage imageSrc={image3} altText="Third slide image" />
        <Carousel.Caption>
          <h3 style={{textDecoration:"underline", fontWeight: "700"}}>Reliable Babysitters</h3>
          <p style={{fontWeight: "500"}}>Providing care and safety for your kids.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
