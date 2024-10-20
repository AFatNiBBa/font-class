
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-xmark?s=sharp-duotone-solid calendar-xmark}
 * @preview ![calendar-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-xmark.svg)
 */
const CalendarXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zm126.1 96L160 254.1l17 17 47 47 47-47 17-17L321.9 288l-17 17-47 47 47 47 17 17L288 449.9l-17-17-47-47-47 47-17 17L126.1 416l17-17 47-47-47-47-17-17z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM305 305l17-17L288 254.1l-17 17-47 47-47-47-17-17L126.1 288l17 17 47 47-47 47-17 17L160 449.9l17-17 47-47 47 47 17 17L321.9 416l-17-17-47-47 47-47z" />
    </Icon>
);

export default CalendarXmark;