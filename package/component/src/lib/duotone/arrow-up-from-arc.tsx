
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=duotone arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 106-86 192-192 192S64 362 64 256c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M121.4 166.6c-12.5-12.5-12.5-32.8 0-45.3l112-112c12.5-12.5 32.8-12.5 45.3 0l112 112c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3 288 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-57.4 57.4c-12.5 12.5-32.8 12.5-45.3 0z" />
    </Icon>
);

export default ArrowUpFromArc;