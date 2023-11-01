import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I am good at programming, software Development, App Development.<br></br> artificial intelligence, Neural Networks, Data Structures, and algorithms.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item skill-item">
                  <img src={meter1} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item skill-item">
                  <img src={meter2} alt="Image" />
                  <h5>App Development</h5>
                </div>
                <div className="item skill-item">
                  <img src={meter3} alt="Image" />
                  <h5>Software Development</h5>
                </div>
                <div className="item skill-item">
                  <img src={meter1} alt="Image" />
                  <h5>Artificial Intelligence</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
