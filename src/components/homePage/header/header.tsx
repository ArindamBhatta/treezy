import { Layout, Affix } from "antd";
import treezyLogo from "../../../assets/logo.png";
import CTA from "../cta";

const { Header } = Layout;

function HeaderComponent() {
  return (
    <Affix offsetTop={0} className="bg-black shadow-lg">
      <Header className="sticky w-full h-16 z-10 flex items-center justify-between bg-white px-6 md:px-16 ">
        <img
          alt="treezy"
          src={treezyLogo}
          className="w-[120px] md:w-[155px] h-8 m-3"
        />
        <CTA className=" w-32 md:h-12 md:w-52" />
      </Header>
    </Affix>
  );
}
export default HeaderComponent;
