import { Layout } from "antd";
import bgPatchRed from "../assets/background-patch.svg";
import bgPatchBlue from "../assets/bg-patch-blue.svg";
import Intro from "./intro";

const { Content } = Layout;
function ContentComponent() {
  return (
    <Content className="px-6 md:px-16">
      <img
        src={bgPatchRed}
        alt="treezy"
        className="hidden md:block fixed top-20 left-48 h-72 z-10"
      />
      <img
        src={bgPatchBlue}
        alt="treezy"
        className="hidden h-72  md:block fixed top-80 right-6 z-10 "
      />
      <img
        src={bgPatchRed}
        alt="treezy"
        className="hidden md:block fixed bottom-20 right-[380px] z-10 h-72"
      />
      <Intro />
    </Content>
  );
}
export default ContentComponent;
