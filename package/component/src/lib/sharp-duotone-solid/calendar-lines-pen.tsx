
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-lines-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-lines-pen?s=sharp-duotone-solid calendar-lines-pen}
 * @preview ![calendar-lines-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-lines-pen.svg)
 */
const CalendarLinesPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0l0 64L0 64zM0 192L0 512l253.4 0L267 417.4l181-181 0-44.4L0 192zm96 80l192 0 0 48L96 320l0-48zm0 96l128 0 0 48L96 416l0-48z" />
        <path d="M576 294.8l-71-71-41.3 41.3 71 71L576 294.8zm-63.9 63.9l-71-71L299.9 429 288 511.9 370.9 500 512.1 358.7z" />
    </Icon>
);

export default CalendarLinesPen;