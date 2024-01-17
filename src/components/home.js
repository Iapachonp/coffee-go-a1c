import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { get_badge } from '../data/data-choices';

export default function Home (){

return(
  <Container>
  <h2 className="text-white bs-light bs-light-text-emphasis"> Bienvenido  
      <span className="badge bg-secondary">{get_badge("Home")}</span></h2>
  <Carousel fade>
      <Carousel.Item>
        <Image src="https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2022/10/5/Coffee-plantation-sq.jpg"  thumbnail />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.oddkincoffee.com/cdn/shop/articles/how-to-make-chemex-coffee_1920x.jpg?v=1688357345"  fluid thumbnail/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.baligoldentour.com/images/bali-interest-place/coffee-plantation.jpg"   thumbnail/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  </Container>
);
}

