import { Col, Row } from "antd";
import CTA from "./cta";
import home from "../assets/home.png";

function IntroTitle({ className }: { className?: string }) {
  return (
    <p className={`title ${className}`}>
      Discover Your <br />
      Personal Style Companion
    </p>
  );
}

function Intro({ className = "" }: { className?: string }) {
  return (
    <Row
      gutter={16}
      className={`flex md:flex-row flex-col-reverse ${className}`}
    >
      <Col
        className="hero-text-container mt-5 md:mt-36 flex flex-col items-center md:items-start"
        md={16}
        span={24}
      >
        <IntroTitle className="hidden md:text-5xl md:block" />
        <div className="description text-sm md:text-2xl md:mt-6 text-center md:text-left">
          <p>
            <b>
              <i>Struggling to find your perfect style?</i>
            </b>
            <br /> Stylemate's expert stylists are here to help!
          </p>
          <p className="mt-3 md:mt-4">
            We take the time to understand you fully, from your age to your
            lifestyle, ensuring personalized recommendations tailored just for
            you. With attention to every detail, we're dedicated to elevating
            your style journey. Welcome to Stylemate, your ultimate fashion
            solution.
          </p>
        </div>
        <CTA className="mt-6 md:mt-8 h-12 w-52" />
      </Col>
      <Col
        className="hero-illustration-container mt-4 md:mt-20 flex flex-col items-center justify-center"
        md={8}
        span={24}
      >
        <IntroTitle className="text-2xl md:hidden text-center font-semibold" />
        <img src={home} alt="treezy" className="mt-5 md:mt-0 w-40 md:w-80" />
      </Col>
    </Row>
  );
}

export default Intro;
