import { Button } from "antd";

function CTA({
  className = "",
  style = {},
}: {
  className?: string;
  style?: Record<string, any>;
}) {
  return (
    <a
      href="https://forms.gle/VMijzzd3ZbVsDipw7"
      target="_blank"
      rel="noreferrer"
    >
      <Button
        className={`cta-btn ${className} md:h-12 md:w-52`}
        style={{ background: "#000", color: "#fff", border: "none" }}
      >
        Get Started
      </Button>
    </a>
  );
}

export default CTA;
