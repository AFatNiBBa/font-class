
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-lines?s=sharp-duotone-solid calendar-lines}
 * @preview ![calendar-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-lines.svg)
 */
const CalendarLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zm96 80l0 48 256 0 0-48L96 272zm0 96l0 48 160 0 0-48L96 368z" />
        <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zm0 272l256 0 0 48L96 320l0-48zm160 96l0 48L96 416l0-48 160 0z" />
    </Icon>
);

export default CalendarLines;