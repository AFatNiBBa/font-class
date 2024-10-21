
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=sharp-light timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 48l0 64 64 0 0-64L80 48zM48 16l32 0 64 0 32 0 0 32 0 64 0 32-32 0-16 0 0 112 224 0 0-112-16 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32-32 0-16 0 0 112 190.6 0-57.4-52.2-11.8-10.8 21.5-23.7 11.8 10.8 88 80 13 11.8-13 11.8-88 80-11.8 10.8-21.5-23.7 11.8-10.8L574.6 288 256 288l0 80 16 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0 16 0 0-80L16 288 0 288l0-32 16 0 80 0 0-112-16 0-32 0 0-32 0-64 0-32zM256 400l-32 0-16 0 0 64 64 0 0-64-16 0zM400 48l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default TimelineArrow;