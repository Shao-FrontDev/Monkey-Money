import React from "react";

// require("icons/tags.svg");
// require("icons/money.svg");
// require("icons/chart.svg");

//require 一个文件夹。
let importAll = (
  requireContext: __WebpackModuleApi.RequireContext
) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string;
};

export default function Icon(props: Props) {
  return (
    <svg className="icon">
      {props.name && <use xlinkHref={`#` + props.name} />}
    </svg>
  );
}
