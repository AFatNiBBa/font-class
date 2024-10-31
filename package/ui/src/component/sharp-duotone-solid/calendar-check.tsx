
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=sharp-duotone-solid calendar-check}
 * @preview ![calendar-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-check.svg)
 */
const CalendarCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM102.1 336l17 17 64 64 17 17 17-17L329 305l17-17L312 254.1l-17 17-95 95-47-47-17-17L102.1 336z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM329 305l17-17L312 254.1l-17 17-95 95-47-47-17-17L102.1 336l17 17 64 64 17 17 17-17L329 305z" />
    </Icon>
);

export default CalendarCheck;