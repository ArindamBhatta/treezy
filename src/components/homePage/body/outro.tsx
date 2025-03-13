import { Row, Col } from "antd";
import outroIllustration from "../../../assets/review_your_opinion.jpg";
import CTA from "../cta";

function Outro({ className = "" }: { className?: string }) {
  return (
    <Row
      gutter={16}
      className={`flex md:flex-row flex-col justify-center ${className}`}
    >
      <Col span={24} className="title">
        <p className="title text-2xl md:text-5xl text-center">
          Grow Green, <b className="text-green-300">Live Sustainable</b>
        </p>
      </Col>
      <Col
        span={24}
        className="illustration-container mt-1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={outroIllustration}
          alt="treezy"
          className="w-[148px] md:w-[360px] md:h-[200px] border-2 m-2"
        />
      </Col>
      <Col span={24} className="description text-sm md:text-xl">
        <p className="text-center">
          At Treezy, we take the time to understand your environment, needs, and
          sustainability goals. Whether you’re planting your first tree or
          managing a thriving green space, our tailored recommendations ensure
          the best growth for your trees.
          <br />
          With expert guidance and smart tools, Treezy helps you nurture a
          greener future. Join us in making the world more sustainable, one tree
          at a time.
        </p>
      </Col>
      <Col span={24} className="flex justify-center">
        <CTA className="mt-6 md:mt-8 h-12 w-52" />
      </Col>
    </Row>
  );
}

export default Outro;
