
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=sharp-solid arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c106 0 192 86 192 192l64 0C512 114.6 397.4 0 256 0S0 114.6 0 256l64 0C64 150 150 64 256 64zM390.6 281.4l-112-112L256 146.7l-22.6 22.6-112 112L98.7 304 144 349.3l22.6-22.6L224 269.3 224 480l0 32 64 0 0-32 0-210.7 57.4 57.4L368 349.3 413.3 304l-22.6-22.6z" />
    </Icon>
);

export default ArrowUpToArc;