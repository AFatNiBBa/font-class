
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-day` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-day?s=sharp-light calendar-day}
 * @preview ![calendar-day](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-day.svg)
 */
const CalendarDay: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-288 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 192l384 0 0 288L32 480l0-288zm0-96l384 0 0 64L32 160l0-64zM96 256l96 0 0 96-96 0 0-96zM64 224l0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-96 0-32 0z" />
    </Icon>
);

export default CalendarDay;