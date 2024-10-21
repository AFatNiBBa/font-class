
import { Icon } from "../../index";

/**
 * A component that renders the `hotdog` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotdog?s=sharp-light hotdog}
 * @preview ![hotdog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hotdog.svg)
 */
const Hotdog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M454.7 244l12 12L256 466.7l-12-12-22.6 22.6 12 12L256 512l22.6-22.6L489.4 278.6 512 256l-22.6-22.6-12-12L454.7 244zM22.6 278.6l12 12L57.3 268l-12-12L256 45.3l12 12 22.6-22.6-12-12L256 0 233.4 22.6 22.6 233.4 0 256l22.6 22.6zM458.9 154.9l-304 304c-28.1 28.1-73.7 28.1-101.8 0S25 385.2 53.1 357.1l304-304c28.1-28.1 73.7-28.1 101.8 0s28.1 73.7 0 101.8zm22.6 22.6c40.6-40.6 40.6-106.5 0-147.1s-106.5-40.6-147.1 0l-304 304c-40.6 40.6-40.6 106.5 0 147.1s106.5 40.6 147.1 0l304-304zm-60.4-33.4l-13-29.2-14.6 6.5-72 32-4.9 2.2-2.6 4.7-37.6 67.7-59.6 29.8-4.4 2.2-2.4 4.3-37.8 68-68 37.8-14 7.8 15.5 28 14-7.8 72-40 4-2.2 2.2-4 37.6-67.7 59.6-29.8 4.4-2.2 2.4-4.3 37.4-67.3 67.1-29.8 14.6-6.5z" />
    </Icon>
);

export default Hotdog;