import { Row, Col } from "antd";
import personalConsultation from "../../assets/personal_consultation.png";
import appRecommendations from "../../assets/app_recommendations.png";
import onGoingSupport from "../../assets/on_going_support.png";

function Step({
  img,
  title,
  description,
}: {
  img: any;
  title: string;
  description: string;
}) {
  return (
    <Col
      className="md:border-2 md:border-gray-300 rounded-lg object-cover flex flex-col items-center mt-6 md:mt-0"
      span={24}
      md={7}
    >
      <img
        src={img}
        alt="treezy"
        className="w-[120px] md:w-[200px] md:h-[200px]  my-2"
      />

      <p className="text-base md:text-xl font-bold">{title}</p>

      <p className="text-sm md:text-xl mt-2 text-center px-10 md:px-2">
        {description}
      </p>
    </Col>
  );
}

function process({ className = "" }: { className?: string }) {
  return (
    <Row gutter={16} className={`flex md:flex-row flex-col ${className}`}>
      {/* 1st child */}
      <Row
        gutter={16}
        className="section-title-container flex items-center justify-center w-full"
      >
        <Col
          className="section-title h-16 md:h-20 flex flex-row items-center justify-center"
          span={24}
        >
          <span className="text-2xl md:text-5xl">How</span>
          <span>
            <span className="text-2xl text-green-300 font-bold md:text-5xl ml-2 md:ml-5">
              Treezy
            </span>
          </span>
          <span className="text-2xl md:text-5xl ml-2 md:ml-5">helps</span>
        </Col>
      </Row>

      {/* 2nd child */}
      <Row
        gutter={16}
        className="flex md:flex-row flex-col justify-between md:mt-16"
      >
        <Step
          img={personalConsultation}
          title="Personalized Tree Consultation"
          description="Treezy's experts analyze your space, climate, and preferences to recommend the best trees for your environment."
        />
        <Step
          img={appRecommendations}
          title="Smart Tree Suggestions"
          description="Get AI-driven tree recommendations tailored to your needs, whether for shade, fruit, or sustainability goals."
        />
        <Step
          img={onGoingSupport}
          title="Continuous Growth Support"
          description="Receive ongoing guidance on tree care, maintenance, and eco-friendly practices to ensure long-term health."
        />
      </Row>
    </Row>
  );
}

export default process;
