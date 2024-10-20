
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=sharp-solid arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256c0-106-86-192-192-192l0-64C397.4 0 512 114.6 512 256s-114.6 256-256 256l0-64c106 0 192-86 192-192zM230.6 121.4l112 112L365.3 256l-22.6 22.6-112 112L208 413.3 162.7 368l22.6-22.6L242.7 288 32 288 0 288l0-64 32 0 210.7 0-57.4-57.4L162.7 144 208 98.7l22.6 22.6z" />
    </Icon>
);

export default ArrowRightToArc;