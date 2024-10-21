
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=light calendar-pen}
 * @preview ![calendar-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-pen.svg)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32zM295.6 257.9c-6.2-6.2-16.4-6.2-22.6 0l-12.2 12.2 29.1 29.1L302.1 287c6.2-6.2 6.2-16.4 0-22.6l-6.4-6.4zm-28.4 63.9l-29.1-29.1L150 381l-8.6 37.7L179 410l88.2-88.2zm-16.9-86.5c18.7-18.7 49.1-18.7 67.9 0l6.4 6.4c18.7 18.7 18.7 49.1 0 67.9l-123 123c-4.3 4.3-9.6 7.2-15.5 8.6L136 452.7c-17.3 4-32.7-11.5-28.8-28.8l11.5-50.2c1.3-5.9 4.3-11.2 8.6-15.5l123-123z" />
    </Icon>
);

export default CalendarPen;