
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=solid arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256C64 150 150 64 256 64c17.7 0 32-14.3 32-32s-14.3-32-32-32C114.6 0 0 114.6 0 256S114.6 512 256 512c17.7 0 32-14.3 32-32s-14.3-32-32-32C150 448 64 362 64 256zM281.4 121.4l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-210.7 0 57.4-57.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
    </Icon>
);

export default ArrowLeftToArc;