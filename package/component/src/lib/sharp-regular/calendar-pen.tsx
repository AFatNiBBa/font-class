
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=sharp-regular calendar-pen}
 * @preview ![calendar-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-pen.svg)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 0l0 24 0 40 144 0 0-40 0-24 48 0 0 24 0 40 104 0 0 80 0 48 0 272 0 48-48 0L48 512 0 512l0-48L0 192l0-48L0 64l104 0 0-40 0-24 48 0zM400 192L48 192l0 272 352 0 0-272zM192 424l-64 8 8-64 88.7-88.7 56 56L192 424zM303.3 312.7l-56-56L280 224l56 56-32.7 32.7z" />
    </Icon>
);

export default CalendarPen;