
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=duotone calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm96 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm3.8 134.2c-8.1 10.5-.6 25.8 12.7 25.8l226.4 0c12.6 0 20.3-13.9 13.5-24.6L268.9 292.3c-6.1-9.7-20.1-9.9-26.7-.5L184 376l-11.4-15.1c-6.4-8.5-19-8.5-25.5-.2L99.8 422.2z" />
        <path d="M128 0C110.3 0 96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 80 448 0 0-80c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32zM99.8 422.2c-8.1 10.5-.6 25.8 12.7 25.8l226.4 0c12.6 0 20.3-13.9 13.5-24.6L268.9 292.3c-6.1-9.7-20.1-9.9-26.7-.5L184 376l-11.4-15.1c-6.4-8.5-19-8.5-25.5-.2L99.8 422.2z" />
    </Icon>
);

export default CalendarImage;