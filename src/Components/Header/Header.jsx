import React, { Children, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <header className=" fixed top-0 left-0 Z-[100] w-full py-5 px-2 bg-[#ffd9d9] shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex items-center justify-between">
      {/* Header Left */}
      <div className="flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon sx={{ color: "#c82196" }} />
        </IconButton>
        <h1 className="ml-2 text-sm font-bold">
          NIDU <span className="text-[#c82196]">DEV</span>
        </h1>
        <div className=" overflow-hidden ml-2  flex items-center rounded-full bg-[#fdf3f3]">
          <input
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? isSearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            className="hidden sm:inline-block outline-none p-2 font-semibold text-sm w-25 bg-inherit ml-1"
          />
          <IconButton onClick={() => setIsSearch(true)}>
            <SearchIcon className="text-gray-400" />
          </IconButton>
        </div>
      </div>
      {/* Header Right */}
      <IconButton>
        <ShoppingCartIcon sx={{ color: "black" }} />
      </IconButton>
    </header>
  );
};

export default Header;
