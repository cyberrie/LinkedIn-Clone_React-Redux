import React from "react";
import { Avatar } from "@mui/material";
import "./Post.css";

import InputOption from "./InputOption";
import {
  ThumbUpAltOutlined,
  ChatOutlined,
  ShareOutlined,
  SendOutlined,
} from "@mui/icons-material";

function Post({ name, decsription, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{decsription}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" coor="gray" />

        <InputOption Icon={ChatOutlined} title="Comment" coor="gray" />

        <InputOption Icon={ShareOutlined} title="Repost" coor="gray" />

        <InputOption Icon={SendOutlined} title="Send" coor="gray" />
      </div>
    </div>
  );
}

export default Post;
