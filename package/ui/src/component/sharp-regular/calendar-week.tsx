
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-week` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-week?s=sharp-regular calendar-week}
 * @preview ![calendar-week](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-week.svg)
 */
const CalendarWeek: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 0l0 24 0 40 144 0 0-40 0-24 48 0 0 24 0 40 104 0 0 80 0 48 0 272 0 48-48 0L48 512 0 512l0-48L0 192l0-48L0 64l104 0 0-40 0-24 48 0zM400 192L48 192l0 272 352 0 0-272zm-48 64l0 96L96 352l0-96 256 0z" />
    </Icon>
);

export default CalendarWeek;