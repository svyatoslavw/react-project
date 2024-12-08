import { forwardRef } from "react"

export const Loader = forwardRef<SVGSVGElement, React.ComponentProps<"svg">>((props, ref) => (
  <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle fill="#3d3db6" stroke="#3d3db6" stroke-width="15" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin="0"
      ></animate>
    </circle>
    <circle fill="#2f43d5" stroke="#2f43d5" stroke-width="15" opacity=".8" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin="0.05"
      ></animate>
    </circle>
    <circle fill="#2f43d5" stroke="#2f43d5" stroke-width="15" opacity=".6" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin=".1"
      ></animate>
    </circle>
    <circle fill="#4555d0" stroke="#4555d0" stroke-width="15" opacity=".4" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin=".15"
      ></animate>
    </circle>
    <circle fill="#2f43d5" stroke="#2f43d5" stroke-width="15" opacity=".2" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin=".2"
      ></animate>
    </circle>
  </svg>
))
