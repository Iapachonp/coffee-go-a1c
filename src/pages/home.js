import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { get_badge } from '../data/data-choices';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/img/animation-2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Banner from '../../src/components/banner';
import Contact from '../../src/components/contact';
import { MailchimpForm } from '../components/mailChipForm';

export default function Home (){

return(
  <div className="container-fluid">
   <Banner />
   <Contact />
   <MailchimpForm /> 
  </div>
);
}


