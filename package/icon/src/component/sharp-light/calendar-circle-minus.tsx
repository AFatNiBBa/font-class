
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=sharp-light calendar-circle-minus}
 * @preview ![calendar-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-circle-minus.svg)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 298.8 0c-12.9-9.1-24.5-19.9-34.6-32L32 480l0-288 320 0 64 0 16 0 16 0 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 96l384 0 0 64L32 160l0-64zM432 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm80-128l0-32-16 0-128 0-16 0 0 32 16 0 128 0 16 0z" />
    </Icon>
);

export default CalendarCircleMinus;