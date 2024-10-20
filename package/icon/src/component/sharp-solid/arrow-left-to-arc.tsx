
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=sharp-solid arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256C64 150 150 64 256 64l0-64C114.6 0 0 114.6 0 256S114.6 512 256 512l0-64C150 448 64 362 64 256zM281.4 121.4l-112 112L146.7 256l22.6 22.6 112 112L304 413.3 349.3 368l-22.6-22.6L269.3 288 480 288l32 0 0-64-32 0-210.7 0 57.4-57.4L349.3 144 304 98.7l-22.6 22.6z" />
    </Icon>
);

export default ArrowLeftToArc;