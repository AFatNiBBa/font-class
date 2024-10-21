
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-xmark?s=sharp-solid calendar-xmark}
 * @preview ![calendar-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-xmark.svg)
 */
const CalendarXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zM305 305l17-17L288 254.1l-17 17-47 47-47-47-17-17L126.1 288l17 17 47 47-47 47-17 17L160 449.9l17-17 47-47 47 47 17 17L321.9 416l-17-17-47-47 47-47z" />
    </Icon>
);

export default CalendarXmark;