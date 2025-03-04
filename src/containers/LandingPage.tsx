import { Layout } from "antd";
import Header from "../components/header";
import Content from "../components/content";

const LandingPage = () => (
  <div className="w-full">
    <Layout>
      <Header />
      <Content />
    </Layout>
  </div>
);

export default LandingPage;
