import React from "react";
import cs from "classnames";
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
} & React.SVGAttributes<SVGElement>;

export default function Icon(props: Props) {
  const { name, children, className, ...rest } = props;
  return (
    <svg className={cs("icon", className)} {...rest}>
      {props.name && <use xlinkHref={`#` + props.name} />}
    </svg>
  );
}
