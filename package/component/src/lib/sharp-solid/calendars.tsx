
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=sharp-solid calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L192 0l0 64L96 64l0 96 416 0 0-96-96 0 0-64L352 0l0 64-96 0 0-64zM96 192l0 224 416 0 0-224L96 192zM0 160L0 488l0 24 24 0 392 0 0-48L48 464l0-304L0 160z" />
    </Icon>
);

export default Calendars;