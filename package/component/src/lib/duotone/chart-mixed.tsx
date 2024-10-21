
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-mixed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-mixed?s=duotone chart-mixed}
 * @preview ![chart-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-mixed.svg)
 */
const ChartMixed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 352l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128-96l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 64l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128-64l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M505 44c11 13.8 8.8 33.9-5 45L340 217c-11.4 9.1-27.5 9.4-39.2 .6L192.6 136.5 52 249c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45L172 71c11.4-9.1 27.5-9.4 39.2-.6l108.2 81.1L460 39c13.8-11 33.9-8.8 45 5z" />
    </Icon>
);

export default ChartMixed;