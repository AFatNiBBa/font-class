
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-circle-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-user?s=sharp-duotone-solid calendar-circle-user}
 * @preview ![calendar-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-circle-user.svg)
 */
const CalendarCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0l0 64L0 64zM0 192L0 512l330.8 0C285.6 480.1 256 427.5 256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-31.7 0-60.3-13.2-80.7-34.3L376 416l112 0 24.7 29.7c-20.4 21.2-49 34.3-80.7 34.3zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CalendarCircleUser;