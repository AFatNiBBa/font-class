
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-high` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-high?s=duotone gauge-high}
 * @preview ![gauge-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-high.svg)
 */
const GaugeHigh: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM448 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M322 142.3c5.3-12.1 19.5-17.6 31.6-12.3s17.6 19.5 12.3 31.6L301.9 307.4C313.1 318.9 320 334.6 320 352c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c.6 0 1.3 0 1.9 0L322 142.3z" />
    </Icon>
);

export default GaugeHigh;