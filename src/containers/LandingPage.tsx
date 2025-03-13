import { Layout } from "antd";
import Header from "../components/header/header";
import Content from "../components/body/content";
import Footer from "../components/footer";

const LandingPage = () => (
  <div className="w-full">
    <Layout>
      <Header />
      <Content />
      <Footer className="mt-6 md:mt-20" />
    </Layout>
  </div>
);

export default LandingPage;
