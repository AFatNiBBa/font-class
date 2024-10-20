
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-days` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=sharp-solid calendar-days}
 * @preview ![calendar-days](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-days.svg)
 */
const CalendarDays: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zM64 320l64 0 0-64-64 0 0 64zm128-64l0 64 64 0 0-64-64 0zm192 64l0-64-64 0 0 64 64 0zM64 448l64 0 0-64-64 0 0 64zm192-64l-64 0 0 64 64 0 0-64zm64 64l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default CalendarDays;