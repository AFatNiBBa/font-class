
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=sharp-duotone-solid chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M160 96l-32 0 0 64 32 0 192 0 32 0 0-64-32 0L160 96zm0 96l-32 0 0 64 32 0 128 0 32 0 0-64-32 0-128 0zm0 96l-32 0 0 64 32 0 256 0 32 0 0-64-32 0-256 0z" />
    </Icon>
);

export default ChartBar;