import React from "react";
import { Link } from "react-router-dom";
import {
  iconArr,
  menuArr
} from "~/assets/ContentArrProject/Footer/MenuAndIcon";
const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center text-center space-y-10 py-16 px-5 text-lg">
      <div>
        <h2 className="text-5xl">Shoes Store</h2>
        <p>NGUYENDANG</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 xl:gap-10">
        {menuArr.map((item) => (
          <Link
            className="hover:text-gray-400 transition-colors duration-500"
            to={""}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <h2>Guaranteed safe ckeckout</h2>
        <div className="flex flex-wrap justify-center items-center gap-3 text-5xl text-secondary">
          {iconArr.map((item) => (
            <Link to={""}>{item}</Link>
          ))}
        </div>
      </div>

      <div>
        <h2>dangkhoinguyen1501@gmail.com</h2>
      </div>
    </div>
  );
};

export default Footer;
