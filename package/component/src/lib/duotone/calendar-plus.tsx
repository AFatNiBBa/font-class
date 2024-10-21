
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-plus?s=duotone calendar-plus}
 * @preview ![calendar-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-plus.svg)
 */
const CalendarPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM120 352c0 13.3 10.7 24 24 24l56 0 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56-56 0c-13.3 0-24 10.7-24 24z" />
        <path d="M96 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 80L0 192l0-80C0 85.5 21.5 64 48 64l48 0 0-32zM224 248c13.3 0 24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-56c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CalendarPlus;