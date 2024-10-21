
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=sharp-thin timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 32l0 96-96 0 0-96 96 0zM80 16L64 16l0 16 0 96 0 16 16 0 40 0 0 104L8 248l-8 0 0 16 8 0 112 0 16 0 80 0 0 104-40 0-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40 0 0-104 372.7 0-66.3 66.3-5.7 5.7L544 347.3l5.7-5.7 80-80 5.7-5.7-5.7-5.7-80-80-5.7-5.7L532.7 176l5.7 5.7L604.7 248 360 248l0-104 40 0 16 0 0-16 0-96 0-16-16 0-96 0-16 0 0 16 0 96 0 16 16 0 40 0 0 104-208 0 0-104 40 0 16 0 0-16 0-96 0-16-16 0L80 16zM360 128l-16 0-40 0 0-96 96 0 0 96-40 0zM176 384l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default TimelineArrow;