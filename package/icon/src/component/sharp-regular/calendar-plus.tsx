
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-plus?s=sharp-regular calendar-plus}
 * @preview ![calendar-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-plus.svg)
 */
const CalendarPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 24l0-24L104 0l0 24 0 40L0 64l0 80 0 48L0 464l0 48 48 0 352 0 48 0 0-48 0-272 0-48 0-80L344 64l0-40 0-24L296 0l0 24 0 40L152 64l0-40zM48 192l352 0 0 272L48 464l0-272zm200 40l-48 0 0 24 0 48-48 0-24 0 0 48 24 0 48 0 0 48 0 24 48 0 0-24 0-48 48 0 24 0 0-48-24 0-48 0 0-48 0-24z" />
    </Icon>
);

export default CalendarPlus;