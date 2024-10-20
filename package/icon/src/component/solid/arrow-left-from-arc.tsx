
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-arc?s=solid arrow-left-from-arc}
 * @preview ![arrow-left-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-left-from-arc.svg)
 */
const ArrowLeftFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256c0-106-86-192-192-192c-17.7 0-32-14.3-32-32s14.3-32 32-32C397.4 0 512 114.6 512 256s-114.6 256-256 256c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192zM121.4 121.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224 320 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-210.7 0 57.4 57.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-112-112c-12.5-12.5-12.5-32.8 0-45.3l112-112z" />
    </Icon>
);

export default ArrowLeftFromArc;