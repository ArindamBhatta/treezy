import { Row, Col } from "antd";
import personalConsultation from "../assets/personal_consultation.png";
import appRecommendations from "../assets/app_recommendations.png";
import onGoingSupport from "../assets/on_going_support.png";

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
      className="help-1-container flex flex-col items-center mt-6 md:mt-0"
      span={24}
      md={7}
    >
      <img src={img} alt="treezy" className="w-[120px] md:w-[200px]" />
      <p className="title text-base md:text-2xl font-bold">{title}</p>
      <p className="description text-sm md:text-xl mt-4 text-center md:text-left px-10 md:px-0">
        {description}
      </p>
    </Col>
  );
}

function Steps({ className = "" }: { className?: string }) {
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
          <span className="text-2xl md:text-5xl">How</span>
          <span>
            <span className="text-2xl text-blue-400 font-bold md:text-5xl ml-2 md:ml-5">
              Treezy
            </span>
          </span>
          <span className="text-2xl md:text-5xl ml-2 md:ml-5">helps</span>
        </Col>
      </Row>
      <Row
        gutter={16}
        className="flex md:flex-row flex-col justify-between md:mt-16"
      >
        <Step
          img={personalConsultation}
          title="Personalized Consultation"
          description="StyleMate's expert stylists conduct a detailed assessment of your preferences, lifestyle, and fashion goals."
        />
        <Step
          img={appRecommendations}
          title="Curated Recommendations"
          description="Based on the consultation, stylists provide tailored outfit suggestions that match your unique style and needs."
        />
        <Step
          img={onGoingSupport}
          title="Ongoing Support"
          description="Stylists offer continuous advice and adjustments to your wardrobe, ensuring you always look your best."
        />
      </Row>
    </Row>
  );
}

export default Steps;
