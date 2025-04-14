import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Icon, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 Z-[100] w-full p-3 bg-[#ffd9d9] shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex items-center justify-between">
      <FooterIcon Icon={HomeIcon} IconText="Home" />
      <FooterIcon Icon={CategoryIcon} IconText="Category" />
      <FooterIcon Icon={AccountCircleIcon} IconText="Profile" />
    </footer>
  );
};

export default Footer;

// eslint-disable-next-line no-unused-vars
const FooterIcon = ({ Icon, IconText }) => (
  <IconButton sx={{ padding: "4px", borderRadius: "5px", paddingTop: "0px" }}>
    <div className=" text-gray-700 hover:text-[#c82196] transition-all duration-100">
      <Icon />
      <p className=" text-xs font-semibold">{IconText}</p>
    </div>
  </IconButton>
);
