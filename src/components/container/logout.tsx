import { Button } from "antd";

import { useDispatch } from "react-redux";
import authService from "../../repo/auth/Auth.repo.ts";

import { logout } from "../../store/auth.slice";

function LogoutBtn({
  className = "",
  style = {},
}: {
  className?: string;
  style?: Record<string, any>;
}) {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
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

export default LogoutBtn;
