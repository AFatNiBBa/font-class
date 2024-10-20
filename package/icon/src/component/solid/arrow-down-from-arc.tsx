
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=solid arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64C150 64 64 150 64 256c0 17.7-14.3 32-32 32s-32-14.3-32-32C0 114.6 114.6 0 256 0S512 114.6 512 256c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-106-86-192-192-192zM121.4 390.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 224 192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 210.7 57.4-57.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-112-112z" />
    </Icon>
);

export default ArrowDownFromArc;