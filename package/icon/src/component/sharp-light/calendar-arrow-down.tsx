
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=sharp-light calendar-arrow-down}
 * @preview ![calendar-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-arrow-down.svg)
 */
const CalendarArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-288 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 192l384 0 0 288L32 480l0-288zm0-96l384 0 0 64L32 160l0-64zM240 256l0-16-32 0 0 16 0 121.4-52.7-52.7L144 313.4 121.4 336l11.3 11.3 80 80L224 438.6l11.3-11.3 80-80L326.6 336 304 313.4l-11.3 11.3L240 377.4 240 256z" />
    </Icon>
);

export default CalendarArrowDown;