
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-range` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=light calendar-range}
 * @preview ![calendar-range](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-range.svg)
 */
const CalendarRange: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32zm0 176c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0c8.8 0 16 7.2 16 16zM240 416L80 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16zM96 272a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 48a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm224 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48-16a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default CalendarRange;