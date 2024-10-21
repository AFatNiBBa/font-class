
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-up?s=sharp-thin calendar-arrow-up}
 * @preview ![calendar-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-arrow-up.svg)
 */
const CalendarArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8l0-8L112 0l0 8 0 56L16 64 0 64 0 80l0 96 0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-304 0-16 0-96 0-16-16 0-96 0 0-56 0-8L320 0l0 8 0 56L128 64l0-56zM16 192l416 0 0 304L16 496l0-304zM112 80l0 40 0 8 16 0 0-8 0-40 192 0 0 40 0 8 16 0 0-8 0-40 96 0 0 96L16 176l0-96 96 0zM216 424l0 8 16 0 0-8 0-156.7 74.3 74.3 5.7 5.7L323.3 336l-5.7-5.7-88-88-5.7-5.7-5.7 5.7-88 88-5.7 5.7L136 347.3l5.7-5.7L216 267.3 216 424z" />
    </Icon>
);

export default CalendarArrowUp;