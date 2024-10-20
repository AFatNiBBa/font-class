
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=duotone arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32s32-14.3 32-32C64 150 150 64 256 64s192 86 192 192c0 17.7 14.3 32 32 32s32-14.3 32-32C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
        <path d="M121.4 345.4c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 402.7 288 192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0z" />
    </Icon>
);

export default ArrowDownFromArc;