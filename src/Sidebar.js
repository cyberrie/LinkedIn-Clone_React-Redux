import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Helena Gilja</h2>
        <h4>helena.gilja@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Connections</p>
          <p className="sidebar_statNumber">543</p>
        </div>

        <div className="sidebar_stat">
          <p>Connect with Alumni</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("software engineering")}
        {recentItem("developer")}
      </div>

      <div className="sidebar_bottom2">
        <p>Groups</p>
        <p>Events</p>
        <p>Followed Hashtags</p>
      </div>

      <div className="sidebar_discover">
        <p>Discover More</p>
      </div>
    </div>
  );
}

export default Sidebar;
