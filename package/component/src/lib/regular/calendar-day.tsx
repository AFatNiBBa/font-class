
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-day` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-day?s=regular calendar-day}
 * @preview ![calendar-day](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calendar-day.svg)
 */
const CalendarDay: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM112 256l96 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default CalendarDay;