
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-end` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-end?s=sharp-regular hourglass-end}
 * @preview ![hourglass-end](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hourglass-end.svg)
 */
const HourglassEnd: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L24 0 360 0l24 0 0 48-24 0-8 0 0 72 0 9.9-7 7-119 119L345 375l7 7 0 9.9 0 72 8 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0 8 0 0-72 0-9.9 7-7 119-119L39 137l-7-7 0-9.9 0-72-8 0L0 48 0 0zM80 48l0 62.1 112 112 112-112L304 48 80 48z" />
    </Icon>
);

export default HourglassEnd;