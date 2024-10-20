
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-up?s=sharp-solid calendar-arrow-up}
 * @preview ![calendar-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-arrow-up.svg)
 */
const CalendarArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zM248 424l0-102.1 39 39 17 17L337.9 344l-17-17-80-80-17-17-17 17-80 80-17 17L144 377.9l17-17 39-39L200 424l0 24 48 0 0-24z" />
    </Icon>
);

export default CalendarArrowUp;