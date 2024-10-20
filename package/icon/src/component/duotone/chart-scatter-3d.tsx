
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter-3d` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter-3d?s=duotone chart-scatter-3d}
 * @preview ![chart-scatter-3d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-scatter-3d.svg)
 */
const ChartScatter_3d: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448c0 7.2 2.4 14.5 7.4 20.5c11.3 13.6 31.5 15.4 45.1 4.1L256 329.7 427.5 472.6c13.6 11.3 33.8 9.5 45.1-4.1s9.5-33.8-4.1-45.1L288 273l0-209c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 209L43.5 423.4C35.9 429.7 32 438.8 32 448z" />
        <path d="M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM416 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM160 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 256A32 32 0 1 0 0 256a32 32 0 1 0 64 0zM256 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default ChartScatter_3d;