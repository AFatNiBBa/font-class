
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-plus?s=sharp-duotone-solid calendar-plus}
 * @preview ![calendar-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-plus.svg)
 */
const CalendarPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM120 328l0 48 24 0 56 0 0 56 0 24 48 0 0-24 0-56 56 0 24 0 0-48-24 0-56 0 0-56 0-24-48 0 0 24 0 56-56 0-24 0z" />
        <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zM248 248l0 24 0 56 56 0 24 0 0 48-24 0-56 0 0 56 0 24-48 0 0-24 0-56-56 0-24 0 0-48 24 0 56 0 0-56 0-24 48 0z" />
    </Icon>
);

export default CalendarPlus;