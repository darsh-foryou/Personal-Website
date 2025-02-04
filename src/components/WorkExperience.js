import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { WorkExperienceCard } from "./WorkExperienceCard"; // Assuming WorkExperienceCard is similar to ProjectCard
import workImg1 from "../assets/img/work-img1.png"; // Image for Work Experience 1
import workImg2 from "../assets/img/work-img2.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AlignCenter } from "react-bootstrap-icons";

export const WorkExperience = () => {

  const workExperiences = [
    {
      title: "Software Engineer Intern",
      description: "At PrideVel Consulting LLC, I developed a blockchain marketplace using Next.js, enhancing secure asset transactions and user engagement. I also optimized database scalability with MongoDB Atlas and implemented secure authentication for many users.",
      imgUrl: workImg1,
    },
    {
        title: "Full Stack Engineer Intern",
        description: "Developed a blockchain marketplace using Next.js, enhancing user engagement by 50% and securing over 1,000 transactions. Optimized backend performance with MongoDB Atlas and implemented secure authentication, supporting 2,000+ users.",
        imgUrl: workImg1,
    },
    {
        title: "Web Developer",
        description: "I successfully designed and maintained the company’s website while managing and optimizing the database for seamless performance. My efforts enhanced the user experience and streamlined data management, driving both site efficiency and customer engagement.",
        imgUrl: workImg2,
    },
  ];

  return (
    <section className="project" id="works">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 style={{ textAlign: 'center' }}>Work Experience</h2>
                  <h4 style={{ textAlign: 'center' }}>Bringing Value through Experience</h4>
                  <p>With every role, I’ve honed my skills, tackled new challenges, and delivered innovative solutions. Dive into my journey of transforming ideas into impactful results across diverse industries.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            workExperiences.map((work, index) => {
                              return (
                                <WorkExperienceCard
                                  key={index}
                                  {...work}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
