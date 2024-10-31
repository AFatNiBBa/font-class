
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-from-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-arc?s=duotone arrow-left-from-arc}
 * @preview ![arrow-left-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-left-from-arc.svg)
 */
const ArrowLeftFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32c0 17.7 14.3 32 32 32c106 0 192 86 192 192s-86 192-192 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c141.4 0 256-114.6 256-256S397.4 0 256 0c-17.7 0-32 14.3-32 32z" />
        <path d="M166.6 121.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 320 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-210.7 0 57.4-57.4c12.5-12.5 12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowLeftFromArc;