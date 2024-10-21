
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=sharp-duotone-solid calendar-pen}
 * @preview ![calendar-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-pen.svg)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM128 448l64-8 88.7-88.7-56-56L136 384l-8 64zM247.3 272.7l56 56L336 296l-56-56-32.7 32.7z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM280.7 351.3l-56-56L136 384l-8 64 64-8 88.7-88.7zm22.6-22.6L336 296l-56-56-32.7 32.7 56 56z" />
    </Icon>
);

export default CalendarPen;