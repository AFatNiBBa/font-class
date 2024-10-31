
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=sharp-solid arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256C64 150 150 64 256 64l32 0 0-64L256 0C114.6 0 0 114.6 0 256S114.6 512 256 512l32 0 0-64-32 0C150 448 64 362 64 256zM374.6 121.4L352 98.7 306.7 144l22.6 22.6L386.7 224 192 224l-32 0 0 64 32 0 194.7 0-57.4 57.4L306.7 368 352 413.3l22.6-22.6 112-112L509.3 256l-22.6-22.6-112-112z" />
    </Icon>
);

export default ArrowRightFromArc;