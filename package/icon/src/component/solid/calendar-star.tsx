
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=solid calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm233.3 58.9c-3.8-7.7-14.8-7.7-18.7 0l-23.6 47.8-52.7 7.7c-8.5 1.2-11.9 11.7-5.8 17.7l38.2 37.2-9 52.5c-1.5 8.5 7.5 15 15.1 11L224 400l47.2 24.8c7.6 4 16.5-2.5 15.1-11l-9-52.5 38.2-37.2c6.2-6 2.8-16.5-5.8-17.7l-52.7-7.7-23.6-47.8z" />
    </Icon>
);

export default CalendarStar;