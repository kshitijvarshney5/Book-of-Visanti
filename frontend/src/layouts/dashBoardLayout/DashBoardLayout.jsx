import { Outlet, useNavigate } from "react-router-dom";
import "./dashBoardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../components/chatList/ChatList";

const DashBoardLayout = () => {
  const { userId, isLoaded } = useAuth();
  console.log(userId);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/signin");
    }
  }, [isLoaded, navigate, userId]);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="dashBoardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
