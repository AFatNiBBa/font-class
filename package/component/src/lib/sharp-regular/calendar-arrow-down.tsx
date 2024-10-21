
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=sharp-regular calendar-arrow-down}
 * @preview ![calendar-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-arrow-down.svg)
 */
const CalendarArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 0l0 24 0 40 144 0 0-40 0-24 48 0 0 24 0 40 104 0 0 80 0 48 0 272 0 48-48 0L48 512 0 512l0-48L0 192l0-48L0 64l104 0 0-40 0-24 48 0zM400 192L48 192l0 272 352 0 0-272zM248 248l0 102.1 39-39 17-17L337.9 328l-17 17-80 80-17 17-17-17-80-80-17-17L144 294.1l17 17 39 39L200 248l0-24 48 0 0 24z" />
    </Icon>
);

export default CalendarArrowDown;