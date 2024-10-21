
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=duotone calendar-pen}
 * @preview ![calendar-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-pen.svg)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM128.5 428c-1.4 5.5 .2 11.2 4.2 15.2c3 3 7.1 4.7 11.3 4.7c1.3 0 2.6-.2 3.9-.5l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L218 304.6l-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9L128.5 428zM240.6 282l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3c-14.7-14.7-38.6-14.7-53.3 0L240.6 282z" />
        <path d="M128 0C110.3 0 96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 80 448 0 0-80c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32zM308.8 267c-14.7-14.7-38.6-14.7-53.3 0L240.6 282l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM146.1 376.5c-4.1 4.1-7 9.2-8.4 14.9L128.5 428c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L218 304.6l-71.9 71.9z" />
    </Icon>
);

export default CalendarPen;