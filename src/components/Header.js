import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG21.png"
        alt="tinder logo"
      />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
