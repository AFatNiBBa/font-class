
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=sharp-thin chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M9.1 464L0 480l18.4 0 475.1 0 18.4 0-9.1-16L265.2 48.1 256 32l-9.2 16.1L9.1 464zm329-256l-164.3 0L256 64.2 338.1 208zm9.1 16l64 112-310.6 0 64-112 182.6 0zm73.1 128l64 112L27.6 464l64-112 328.9 0z" />
    </Icon>
);

export default ChartPyramid;