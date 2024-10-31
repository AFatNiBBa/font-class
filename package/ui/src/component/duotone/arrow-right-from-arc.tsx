
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=duotone arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c17.7 0 32-14.3 32-32s-14.3-32-32-32C150 448 64 362 64 256S150 64 256 64c17.7 0 32-14.3 32-32s-14.3-32-32-32C114.6 0 0 114.6 0 256z" />
        <path d="M345.4 121.4c12.5-12.5 32.8-12.5 45.3 0l112 112c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288 192 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l210.7 0-57.4-57.4c-12.5-12.5-12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowRightFromArc;