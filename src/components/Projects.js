import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "TinDog",
      description: "TinDog: Swipe. Match. Play. Discover playmates for your dog in your neighborhood with TinDog. It’s simple—swipe, match, and let your pup play!",
      imgUrl: projImg1,
    },
    {
      title: "Travelo",
      description: "Book your next getaway with Travelo—the easiest way to explore exciting destinations and secure your travel plans swiftly. From sandy beaches to urban landscapes, start your adventur",
      imgUrl: projImg4,
    },
    {
      title: "CodeMaster",
      description: "Unlock your coding potential with CodeMaster, the ultimate editor designed for developers who speak in many languages. Code efficiently with tailored support for every major programming language—all in one sleek interface.",
      imgUrl: projImg5,
    },
    {
      title: "Bloggy",
      description: "Elevate your blogging experience with BlogSphere, the ultimate app for writers who inspire and engage. Create beautifully, connect seamlessly, and share your stories with the world—anytime, anywhere.",
      imgUrl: projImg7,
    },
    {
      title: "Buy-It",
      description: "BuyIt is an Amazon clone utilizing React.js, Node.js, MongoDB, and several APIs. This project incorporates features enabling users to browse a wide range of products and seamlessly add them to their shopping carts.",
      imgUrl: projImg9,
    },
    {
      title: "Smart-Mart ",
      description: "leverages YOLOv3 and React.js to revolutionize retail, enhancing product identification and user experience with an AI-driven Smart Shopping Basket. This platform optimizes customer interactions through a real-time recommendation system, boosting satisfaction by 30%.",
      imgUrl: projImg8,
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
                <h4 style={{ textAlign: 'center' }}>Turning Ideas into Reality</h4>

               
                <p>Welcome to my project showcase! Here, you’ll see how I transform ideas into real, working solutions. From building sleek websites to creating powerful cloud-based apps, every project tells a story of creativity and hard work. Get ready to see what I can do!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
