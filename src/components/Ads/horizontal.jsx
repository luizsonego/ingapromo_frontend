import React from "react";
import { Link } from "react-router-dom";

const AdsHorizontal = (props) => {
  return (
    <div class="flex justify-center">
      <Link to="">
        <img
          src={props.src}
          class="rounded-xl h-60"
          alt={props.title}
          title={props.title}
        />
      </Link>
      <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3 hidden">
        {" "}
        {props.title}{" "}
      </p>
    </div>
  );
};

export default AdsHorizontal;
