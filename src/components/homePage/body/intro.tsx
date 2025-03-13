import { Col, Row } from "antd";
import CTA from "../cta";
import intro from "../../../assets/intro.png";

function IntroTitle({ className }: { className?: string }) {
  return (
    <p className={`title ${className}`}>
      Boost Your <br />
      Productivity with Nature
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
        md={16} //for medium and large screen col 16/24  = 66.7^
        span={24}
      >
        <IntroTitle className="hidden md:text-5xl md:block" />

        <div className="description text-sm md:text-2xl md:mt-6 text-center md:text-left">
          <p>
            <b>
              <i>Did you know trees can enhance focus and creativity?</i>
            </b>
            <br /> Some trees, like the Bamboo Palm and Peace Lily, not only
            purify the air but also create a calming ambiance that helps improve
            concentration and reduce stress.
          </p>
          <p className="mt-3 md:mt-4">
            Whether you’re working from home or in an office, incorporating
            greenery into your space can significantly boost productivity.
            Discover the best trees to enhance your workflow today!
          </p>
        </div>
        <CTA className="mt-6 md:mt-8 h-12 w-52" />
      </Col>

      <Col
        className="hero-illustration-container mt-4 md:mt-20 flex flex-col items-center justify-center"
        md={8}
        span={24}
      >
        <img
          src={intro}
          alt="Trees that boost productivity"
          className="mt-5 md:mt-0 w-40 md:w-80"
        />
      </Col>
    </Row>
  );
}

export default Intro;
