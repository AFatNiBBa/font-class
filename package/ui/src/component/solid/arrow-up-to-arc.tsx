
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=solid arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c106 0 192 86 192 192c0 17.7 14.3 32 32 32s32-14.3 32-32C512 114.6 397.4 0 256 0S0 114.6 0 256c0 17.7 14.3 32 32 32s32-14.3 32-32C64 150 150 64 256 64zM390.6 281.4l-112-112c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 269.3 224 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowUpToArc;