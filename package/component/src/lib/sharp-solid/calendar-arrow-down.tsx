
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=sharp-solid calendar-arrow-down}
 * @preview ![calendar-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-arrow-down.svg)
 */
const CalendarArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zm248 72l0-24-48 0 0 24 0 102.1-39-39-17-17L110.1 344l17 17 80 80 17 17 17-17 80-80 17-17L304 310.1l-17 17-39 39L248 264z" />
    </Icon>
);

export default CalendarArrowDown;