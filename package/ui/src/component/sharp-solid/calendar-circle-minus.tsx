
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=sharp-solid calendar-circle-minus}
 * @preview ![calendar-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-circle-minus.svg)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 0L96 0l0 64L0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64zm96 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192 0 512l330.8 0C285.6 480.1 256 427.5 256 368zm320 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-64 16l-16 0-128 0-16 0 0-32 16 0 128 0 16 0 0 32z" />
    </Icon>
);

export default CalendarCircleMinus;