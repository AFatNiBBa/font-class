
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=sharp-light calendar-check}
 * @preview ![calendar-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-check.svg)
 */
const CalendarCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-288 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 192l384 0 0 288L32 480l0-288zm0-96l384 0 0 64L32 160l0-64zM331.3 283.3L342.6 272 320 249.4l-11.3 11.3L208 361.4l-52.7-52.7L144 297.4 121.4 320l11.3 11.3 64 64L208 406.6l11.3-11.3 112-112z" />
    </Icon>
);

export default CalendarCheck;