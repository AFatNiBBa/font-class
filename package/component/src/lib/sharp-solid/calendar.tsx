
import { Icon } from "../../index";

/**
 * A component that renders the `calendar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar?s=sharp-solid calendar}
 * @preview ![calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar.svg)
 */
const Calendar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0l0 64L0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0zM448 192L0 192 0 512l448 0 0-320z" />
    </Icon>
);

export default Calendar;