
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=sharp-duotone-solid calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM80 448l288 0L256 272 184 376l-24-32L80 448zM96 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM80 448l288 0L256 272 184 376l-24-32L80 448z" />
    </Icon>
);

export default CalendarImage;