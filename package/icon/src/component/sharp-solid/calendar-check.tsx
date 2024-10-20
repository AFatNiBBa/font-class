
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=sharp-solid calendar-check}
 * @preview ![calendar-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-check.svg)
 */
const CalendarCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zM329 305l17-17L312 254.1l-17 17-95 95-47-47-17-17L102.1 336l17 17 64 64 17 17 17-17L329 305z" />
    </Icon>
);

export default CalendarCheck;