
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-up?s=sharp-light calendar-arrow-up}
 * @preview ![calendar-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-arrow-up.svg)
 */
const CalendarArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-288 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 192l384 0 0 288L32 480l0-288zm0-96l384 0 0 64L32 160l0-64zM208 408l0 16 32 0 0-16 0-121.4 52.7 52.7L304 350.6 326.6 328l-11.3-11.3-80-80L224 225.4l-11.3 11.3-80 80L121.4 328 144 350.6l11.3-11.3L208 286.6 208 408z" />
    </Icon>
);

export default CalendarArrowUp;