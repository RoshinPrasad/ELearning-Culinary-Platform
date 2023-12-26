import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MentorHeaders from "./MentorHeader";
import DashboardComponent from "./DashboardComponent"; 
import ClassManagementComponent from "./ClassManagementComponent"; 
import MentorProfileComponent from "./MentorProfileComponent"; 
import NotificationsComponent from "./NotificationsComponent"; 
import ChatComponent from "./ChatComponent"; 
import Divider from '@mui/material/Divider';

function MentorDashboard() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("dashboard");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <MentorHeaders />
      <div style={{ display: "flex" }}>
        
        <div style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          padding: "58px 0 0", 
          boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 2px 10px 0 rgba(0, 0, 0, 0.05)",
          width: "240px",
          zIndex: 600,
        }}>
          <button 
            onClick={() => handleButtonClick("dashboard")} 
            style={{ 
              backgroundColor: selectedButton === "dashboard" ? "aqua" : "transparent",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%", // Make the button fill the width
            }}
          >
            Dashboard
          </button>
          <Divider sx={{ borderBottom: '2px solid black' }} />
          <button 
            onClick={() => handleButtonClick("classManagement")} 
            style={{ 
              backgroundColor: selectedButton === "classManagement" ? "aqua" : "transparent",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Class Management
          </button>
          <Divider sx={{ borderBottom: '2px solid black' }} />
          <button 
            onClick={() => handleButtonClick("mentorProfile")} 
            style={{ 
              backgroundColor: selectedButton === "mentorProfile" ? "aqua" : "transparent",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Mentor Profile
          </button>
          <Divider sx={{ borderBottom: '2px solid black' }} />
          <button 
            onClick={() => handleButtonClick("notifications")} 
            style={{ 
              backgroundColor: selectedButton === "notifications" ? "aqua" : "transparent",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Notifications
          </button>
          <Divider sx={{ borderBottom: '2px solid black' }} />
          <button 
            onClick={() => handleButtonClick("chat")} 
            style={{ 
              backgroundColor: selectedButton === "chat" ? "aqua" : "transparent",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Chat
          </button>
        </div>

        
        <div style={{ marginLeft: "240px", padding: "10px" }}>
          {selectedButton === "dashboard" && <DashboardComponent />}
          {selectedButton === "classManagement" && <ClassManagementComponent />}
          {selectedButton === "mentorProfile" && <MentorProfileComponent />}
          {selectedButton === "notifications" && <NotificationsComponent />}
          {selectedButton === "chat" && <ChatComponent />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
