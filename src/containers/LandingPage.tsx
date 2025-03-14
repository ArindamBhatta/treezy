import { Layout } from "antd";
import Header from "../components/homePage/header/header";
import Content from "../components/homePage/body/content";
import Footer from "../components/homePage/footer";

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
