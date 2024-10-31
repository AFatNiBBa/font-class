
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter-3d` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter-3d?s=sharp-duotone-solid chart-scatter-3d}
 * @preview ![chart-scatter-3d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-scatter-3d.svg)
 */
const ChartScatter_3d: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.9 443.9l41 49.2 24.6-20.5L256 329.7 427.5 472.6l24.6 20.5 41-49.2-24.6-20.5L288 273l0-209 0-32-64 0 0 32 0 209L43.5 423.4 18.9 443.9z" />
        <path d="M0 32l64 0 0 64L0 96 0 32zM0 224l64 0 0 64L0 288l0-64zm160-96l0 64-64 0 0-64 64 0zM352 32l64 0 0 64-64 0 0-64zm160 96l0 64-64 0 0-64 64 0zM352 224l64 0 0 64-64 0 0-64zM288 416l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default ChartScatter_3d;