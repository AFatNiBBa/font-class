
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=solid chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0L163 160 349 160 290.6 59.7zM69.6 320l372.8 0L367.7 192l-223.4 0L69.6 320zM51 352L11.4 419.8C-4.2 446.5 15.1 480 45.9 480l420.1 0c30.9 0 50.1-33.5 34.6-60.2L461 352 51 352z" />
    </Icon>
);

export default ChartPyramid;