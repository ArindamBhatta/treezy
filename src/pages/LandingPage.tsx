import { Layout } from "antd";
import Header from "../components/container/header";
import Content from "../components/homePage/body/content";
import Footer from "../components/Footer/footer";

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
