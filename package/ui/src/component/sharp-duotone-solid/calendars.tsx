
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=sharp-duotone-solid calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 192l416 0 0 224L96 416l0-224z" />
        <path d="M256 0L192 0l0 64L96 64l0 128 416 0 0-128-96 0 0-64L352 0l0 64-96 0 0-64zM48 184l0-24L0 160l0 24L0 488l0 24 24 0 368 0 24 0 0-48-24 0L48 464l0-280z" />
    </Icon>
);

export default Calendars;