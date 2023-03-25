import React from "react";
import "./Widgets.css";
import { Info } from "@mui/icons-material";
import { FiberManualRecord } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Elon Musk sold Twitter", "Top News - 28 readers ")}
      {newsArticle("UK Parliament bans TikTok", "1 day ago - 10,786 readers ")}
      {newsArticle(
        "Crafting the perfect resignation letter",
        "now - 1 mil. readers "
      )}
      {newsArticle("Redux is so cool!", "1 day ago - 1 reader ")}
    </div>
  );
}

export default Widgets;
