
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=sharp-solid chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.4 320l329.1 0L347.4 192l-182.9 0L91.4 320zM73.1 352L0 480l512 0L438.9 352 73.1 352zM256 32L182.9 160l146.3 0L256 32z" />
    </Icon>
);

export default ChartPyramid;