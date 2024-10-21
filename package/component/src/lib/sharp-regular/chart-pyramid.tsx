
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=sharp-regular chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M27.4 432L0 480l55.3 0 401.4 0 55.3 0-27.4-48L283.6 80.4 256 32 228.4 80.4 27.4 432zM301.3 208l-90.6 0L256 128.7 301.3 208zm27.4 48l36.6 64-218.6 0 36.6-64 145.4 0zm64 112l36.6 64L82.7 432l36.6-64 273.4 0z" />
    </Icon>
);

export default ChartPyramid;