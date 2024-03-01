import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { id, src, text, desc } = data;
  return (
    <Link
      to={id}
      className="bg-white rounded-xl hover:shadow-xl px-12 py-4 flex  justify-around  items-start flex-col"
    >
      <div className="flex md:flex-row flex-col justify-between md:gap-12 items-center">
        <img src={src} alt="iw" />
        <h2 className="text-3xl font-bold ">{text}</h2>
      </div>
      <p className="text-gray my-4 md:w-1/2">{desc}</p>
    </Link>
  );
};

export default ServiceCard;
