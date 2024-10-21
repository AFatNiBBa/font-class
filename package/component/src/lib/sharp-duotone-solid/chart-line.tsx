
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=sharp-duotone-solid chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M470.6 150.6l-128 128L320 301.3l-22.6-22.6L240 221.3l-89.4 89.4-45.3-45.3 112-112L240 130.7l22.6 22.6L320 210.7 425.4 105.4l45.3 45.3z" />
    </Icon>
);

export default ChartLine;