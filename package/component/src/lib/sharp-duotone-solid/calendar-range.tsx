
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-range` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=sharp-duotone-solid calendar-range}
 * @preview ![calendar-range](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-range.svg)
 */
const CalendarRange: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zm64 64l0 64 64 0 0-64-64 0zm0 136l0 48 192 0 0-48L64 392zM192 264l0 48 192 0 0-48-192 0zM320 384l0 64 64 0 0-64-64 0z" />
        <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zm32 256l0 64-64 0 0-64 64 0zM320 448l0-64 64 0 0 64-64 0zm64-184l0 48-192 0 0-48 192 0zM64 392l192 0 0 48L64 440l0-48z" />
    </Icon>
);

export default CalendarRange;