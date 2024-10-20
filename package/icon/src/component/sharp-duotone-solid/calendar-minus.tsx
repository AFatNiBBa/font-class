
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-minus?s=sharp-duotone-solid calendar-minus}
 * @preview ![calendar-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-minus.svg)
 */
const CalendarMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zM112 328l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM312 376l24 0 0-48-24 0-176 0-24 0 0 48 24 0 176 0z" />
    </Icon>
);

export default CalendarMinus;