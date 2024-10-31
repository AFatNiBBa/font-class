
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-plus?s=sharp-thin calendar-plus}
 * @preview ![calendar-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-plus.svg)
 */
const CalendarPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 8 0 56 192 0 0-56 0-8 16 0 0 8 0 56 96 0 16 0 0 16 0 96 0 16 0 304 0 16-16 0L16 512 0 512l0-16L0 192l0-16L0 80 0 64l16 0 96 0 0-56 0-8 16 0zM432 192L16 192l0 304 416 0 0-304zM112 120l0-40L16 80l0 96 416 0 0-96-96 0 0 40 0 8-16 0 0-8 0-40L128 80l0 40 0 8-16 0 0-8zM320 352l-8 0-80 0 0 80 0 8-16 0 0-8 0-80-80 0-8 0 0-16 8 0 80 0 0-80 0-8 16 0 0 8 0 80 80 0 8 0 0 16z" />
    </Icon>
);

export default CalendarPlus;