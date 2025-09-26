import { useDispatch } from "react-redux";
import { AuthRepo } from "../repo/auth/Auth.repo";
import { logout } from "../store/auth.slice";
import { Button } from "antd";

function LogoutBtn({
  className = "",
  style = {},
}: {
  className?: string;
  style?: Record<string, any>;
}) {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AuthRepo.getInstance().signOut();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className={`cta-btn ${className} md:h-12 md:w-52`}
      style={{ background: "#000", color: "#fff", border: "none" }}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;
