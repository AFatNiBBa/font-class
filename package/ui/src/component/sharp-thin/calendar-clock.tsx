
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=sharp-thin calendar-clock}
 * @preview ![calendar-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-clock.svg)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0l0 8 0 56 192 0 0-56 0-8 16 0 0 8 0 56 96 0 16 0 0 16 0 96 0 16 0 .7c-5.3-.5-10.6-.7-16-.7L16 192l0 304 295.2 0c6.1 5.8 12.7 11.1 19.6 16L16 512 0 512l0-16L0 192l0-16L0 80 0 64l16 0 96 0 0-56 0-8 16 0zM112 120l0-40L16 80l0 96 416 0 0-96-96 0 0 40 0 8-16 0 0-8 0-40L128 80l0 40 0 8-16 0 0-8zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm8 64l0 8 0 64 48 0 8 0 0 16-8 0-56 0-8 0 0-8 0-72 0-8 16 0z" />
    </Icon>
);

export default CalendarClock;