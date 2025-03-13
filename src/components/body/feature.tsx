import { Row, Col } from "antd";
import treeCareIllustration from "../../assets/tree_care_tip.png";
import suggestedTree from "../../assets/suggest_tree.png";
import deskManagement from "../../assets/desk_management.png";
import SeamlessShopping from "../../assets/bye_shell.png";

function Feature({
  img,
  title,
  description,
  className,
}: {
  img: any;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Row
      gutter={16}
      className={`flex items-center flex-col md:flex-row mt-6 md:mt-16 ${className}`}
    >
      <Col
        className={`illustration-container ${
          className ? "flex justify-end" : ""
        }`}
        span={24}
        md={12}
      >
        <img
          src={img}
          alt="treezy"
          className="w-[150px] h-[150px] md:w-[428px] md:h-[428px] md:border-2"
        />
      </Col>
      <Col
        className="text-container text-center md:text-left mt-6 md:mt-0"
        span={24}
        md={12}
      >
        <div className="title text-green-300 text-base md:text-2xl font-bold">
          {title}
        </div>
        <div className="description text-sm md:text-xl mt-4">{description}</div>
      </Col>
    </Row>
  );
}

function Features({ className = "" }: { className?: string }) {
  return (
    <Row gutter={16} className={`flex md:flex-row flex-col ${className}`}>
      <Row
        gutter={16}
        className="section-title-container flex items-center justify-center w-full"
      >
        <Col
          className="section-title h-16 md:h-20 flex flex-row items-center justify-center"
          span={24}
        >
          <span className="text-2xl md:text-5xl text-center md:text-left">
            Discover How <b className="text-green-300">Treezy</b> Makes Tree
            Management Easy
          </span>
        </Col>
      </Row>
      <Feature
        img={suggestedTree}
        title="Smart Tree Recommendations"
        description="Get AI-powered tree suggestions based on your location, climate, and preferences to ensure the best growth and sustainability."
      />
      <Feature
        img={deskManagement}
        title="Personal Desk Management"
        description="Easily manage and track your planted trees, receive reminders for watering and maintenance, and monitor growth with Treezy’s tools."
        className="md:flex-row-reverse"
      />
      <Feature
        img={treeCareIllustration}
        title="Ask an Expert"
        description="Have questions about your trees? Connect with professional arborists and a community of tree enthusiasts for expert advice."
      />
      <Feature
        img={SeamlessShopping}
        title="Buy & Sell Trees with One Click"
        description="Effortlessly purchase or sell trees, saplings, and plant-related products through our seamless marketplace."
        className="md:flex-row-reverse"
      />
    </Row>
  );
}

export default Features;
