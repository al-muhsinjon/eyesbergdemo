import React from "react";
import { IoLocation } from "react-icons/io5";

import { Link } from "react-router-dom";
import Languages from "./languages";
import Button from "./Button";
import { logo } from "../images";

const Navbar = () => {
  return (
    <header className="flex justify-between px-[7%] items-center h-20 text-xl font-bold">
      <div className="flex  gap-8">
        <Link to="/">
          <img src={logo} className=" w-[197px] h-[42px]" alt="logo" />
        </Link>
        <b className="text-blue  flex items-center gap-1">
          <IoLocation className="text-2xl" />
          <span>Toshkent</span>
        </b>
      </div>
      <div className="flex gap-4">
        <Languages />
        <Button>Kirish</Button>
      </div>
    </header>
  );
};

export default Navbar;
