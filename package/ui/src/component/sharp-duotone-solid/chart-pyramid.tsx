
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=sharp-duotone-solid chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M73.1 352c30.5-53.3 61-106.7 91.4-160l182.9 0 91.4 160L73.1 352z" />
        <path d="M73.1 352L0 480l512 0L438.9 352 73.1 352zm91.4-160l182.9 0L256 32 164.6 192z" />
    </Icon>
);

export default ChartPyramid;