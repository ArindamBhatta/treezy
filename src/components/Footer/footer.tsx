import { Layout } from "antd";
import treezyLogo from "../../assets/treezy_logo.png";
import fbIcon from "../../assets/fb-icon.svg";
import instaIcon from "../../assets/insta-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import mailIcon from "../../assets/mail-icon.svg";

const { Footer } = Layout;

function FooterComponent({ className = "" }) {
  return (
    <Footer className={`bg-black flex flex-col z-10 ${className}`}>
      <div className="footer-logo flex justify-center md:justify-start">
        <img src={treezyLogo} alt="Treezy" className="h-20 ml-[-16px]" />
      </div>
      <div className="contact-us flex mt-4 justify-center md:justify-start">
        <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61559103487609">
          <img src={fbIcon} alt="Treezy" className="mr-3" />
        </a>
        <a href="https://www.instagram.com/_yourstylemate">
          <img src={instaIcon} alt="Treezy" className="mr-3" />
        </a>
        <a href="https://www.linkedin.com/company/yourstylemate">
          <img src={linkedinIcon} alt="Treezy" className="mr-3" />
        </a>
        <a href="mailto:info@yourstylemate.com">
          <img src={mailIcon} alt="Treezy" className="mr-3" />
        </a>
      </div>
    </Footer>
  );
}

export default FooterComponent;
