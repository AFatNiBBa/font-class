
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=duotone arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 106-86 192-192 192S64 362 64 256c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M390.6 185.4c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-112-112c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7 224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 210.7 57.4-57.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ArrowDownToArc;