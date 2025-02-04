import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Full Stack Developer", "Software Engineer", "Blockchain Developer", "Cloud Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; // time that pass before starting to delete the text

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTimeout(() => setDelta(100), period);  // Short delay before starting to delete
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300 - Math.random() * 100); // Reset delta when starting to type new text
        } else if (isDeleting) {
            setDelta(prevDelta => Math.max(50, prevDelta / 2));  // Speed up deletion
        } else {
            setDelta(300 - Math.random() * 100); // Normal typing speed
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Digital Space!</span>
                        <h1>{'Hi, I’m Darshil Modi '}<span className="wrap">{text}</span></h1>
                        <p>A tech lover who enjoys making programs work. I’m studying for my Master’s in Computer Science at Syracuse University, where I’m learning a lot about data structures, machine learning, and even blockchain technology! I like to make tech solutions that are not only effective but also enjoyable to use. Alongside my studies, I've earned AWS certifications in both development and cloud practices, sharpening my skills in cloud infrastructure and services.If you need someone who has fun with coding and takes on challenges with excitement, let's work together and create something awesome!</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
