import React from "react";
import { Link } from "react-router-dom";

interface props {}

const Footer: React.FC<props> = ({}) => {
  return (
    <div>
      <footer className="bg-white rounded-base shadow-xs border border-default m-4  ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className=" text-sm text-body sm:text-center">
            © 2026
            <Link to="/" className="hover:underline">
              Julian Witjaksono™
            </Link>
            . All Rights Reserved. <br />
            Made With Love ❤️
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
