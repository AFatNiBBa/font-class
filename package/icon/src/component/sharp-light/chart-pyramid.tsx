
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=sharp-light chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.3 448L0 480l36.9 0 438.3 0 36.9 0-18.3-32L274.4 64.2 256 32 237.6 64.2 18.3 448zM310.6 192l-109.1 0L256 96.5 310.6 192zm18.3 32l54.9 96-255.4 0 54.9-96 145.7 0zM402 352l54.9 96L55.1 448 110 352l292 0z" />
    </Icon>
);

export default ChartPyramid;