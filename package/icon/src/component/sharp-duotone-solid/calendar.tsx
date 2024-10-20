
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar?s=sharp-duotone-solid calendar}
 * @preview ![calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar.svg)
 */
const Calendar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192z" />
        <path d="M160 32l0-32L96 0l0 32 0 32L0 64 0 192l448 0 0-128-96 0 0-32 0-32L288 0l0 32 0 32L160 64l0-32z" />
    </Icon>
);

export default Calendar;