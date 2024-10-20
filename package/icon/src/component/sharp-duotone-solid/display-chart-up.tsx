
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display-chart-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-chart-up?s=sharp-duotone-solid display-chart-up}
 * @preview ![display-chart-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/display-chart-up.svg)
 */
const DisplayChartUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 416l240 0 96 0 240 0L576 0 0 0zM64 64l448 0 0 288L64 352 64 64z" />
        <path d="M64 64l448 0 0 288L64 352 64 64zM346.7 448l69.3 0 32 0 0 64-32 0-256 0-32 0 0-64 32 0 69.3 0L240 416l96 0 10.7 32zM344 112l-24 0 0 48 24 0 38.1 0L304 238.1l-63-63-17-17-17 17-96 96L145 305l79-79 63 63 17 17 17-17 95-95 0 38.1 0 24 48 0 0-24 0-96 0-24-24 0-96 0z" />
    </Icon>
);

export default DisplayChartUp;