
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=solid arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448c106 0 192-86 192-192c0-17.7 14.3-32 32-32s32 14.3 32 32c0 141.4-114.6 256-256 256S0 397.4 0 256c0-17.7 14.3-32 32-32s32 14.3 32 32c0 106 86 192 192 192zM390.6 230.6l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-112-112c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7 224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 210.7 57.4-57.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
    </Icon>
);

export default ArrowDownToArc;