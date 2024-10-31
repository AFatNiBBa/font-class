
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-exclamation?s=sharp-solid calendar-exclamation}
 * @preview ![calendar-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-exclamation.svg)
 */
const CalendarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0l0 64L0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0zM448 192L0 192 0 512l448 0 0-320zM248 240l0 24 0 96 0 24-48 0 0-24 0-96 0-24 48 0zm0 176l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default CalendarExclamation;