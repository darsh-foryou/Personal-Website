// import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import colorSharp from "../assets/img/color-sharp.png";
// export const Skills = () =>{
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//       return (
//         <section className="skill" id="skills">
//             <Container>
//                 <Row>
//                     <Col>
//                     <div className="skill=bx">
//                         <h2>
//                             SKILLS
//                         </h2>
//                         <p>I'm skilled in multiple programming languages and cloud technologies, focused on solving complex challenges with efficient and practical software solutions. My approach always combines technical expertise with a clear goal of delivering impactful results.</p>
//                         <h5> Core Competencies</h5>
//                         <Carousel responsive={responsive} infinite = {true} className="skill-slider">
//                             <div className="item">
//                                 <img src={""} alt = "Image" />
//                                 <h5> Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={""} alt = "Image" />
//                                 <h5> Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={""} alt = "Image" />
//                                 <h5> Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={""} alt = "Image" />
//                                 <h5> Web Development</h5>
//                             </div>

//                         </Carousel>
//                     </div>
//                     </Col>
//                 </Row>
//             </Container>
//             <img  className="background-image-left" src={colorSharp}/>
            
//         </section>
//       )
// }
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meter1 from "../assets/img/meter1.svg";
import Meter2 from "../assets/img/meter2.svg";
import Meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>SKILLS</h2>
                            <p>I'm skilled in multiple programming languages and cloud technologies, focused on solving complex challenges with efficient and practical software solutions. My approach always combines technical expertise with a clear goal of delivering impactful results.</p>
                            
                            <h4>Core Competencies</h4>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="Cloud Technologies" />
                                    <h5>Cloud Technologies</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="Blockchain Development" />
                                    <h5>Blockchain Development</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="Full Stack Development" />
                                    <h5>Full Stack Development</h5>
                                </div>
                            </Carousel>

                            <h4>Technical Proficiencies</h4>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Meter1} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="React.js" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="Node.js" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src= {Meter2} alt="Next.js" />
                                    <h5>Next.js</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="TypeScript" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="Java" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="C/C++" />
                                    <h5>C/C++</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="Redux" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="Three.js" />
                                    <h5>Three.js</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="Web3.js" />
                                    <h5>Web3.js</h5>
                                </div>
                            </Carousel>
                            <h4>Development Tools and Methodologies</h4>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Meter1} alt="Git" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="VSCode" />
                                    <h5>VSCode</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="JIRA" />
                                    <h5>JIRA</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img  className="background-image-left" src={colorSharp}/>
        </section>
    );
}
