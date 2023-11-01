import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import IMS1 from "../assets/img/IMS-1.jpeg";
import IMS2 from "../assets/img/splash.jpg";
import IMS3 from "../assets/img/IMS-3.png";
import IMS4 from "../assets/img/IMS-website.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "IMS Version 1.0",
      description: "Website & Software",
      imgUrl: IMS1,
      href: "https://github.com/Jayachandra5/IMS-Version-1.0"
    },
    {
      title: "IMS Version 2.0",
      description: "Website & Software",
      imgUrl: IMS4,
      href: "https://ims.unaux.com/contribute-2/"
    },
    {
      title: "IMS Version 3.0",
      description: "Website & Software",
      imgUrl: IMS1,
      href: "https://ims.unaux.com/features/"
    },
    {
      title: "IMS Website",
      description: "For Downloding & Product Demo",
      imgUrl: IMS4,
      href: "https://ims.unaux.com/"
    },
    {
      title: "Personal Website",
      description: "This Website",
      imgUrl: IMS1,
      href: "https://github.com/Jayachandra5/IMS-Version-1.0"
    },
    {
      title: "Text Editor",
      description: "Design & Development",
      imgUrl: IMS4,
      href: "https://github.com/Jayachandra5/Text-Editor-"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have created and developed of a Real-Time Software called the Inventory Management System, Which is Copyrighted under my name.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>  </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>  </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
