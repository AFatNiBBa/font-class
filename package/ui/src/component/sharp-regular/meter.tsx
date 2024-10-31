
import { Icon } from "../../index";

/**
 * A component that renders the `meter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter?s=sharp-regular meter}
 * @preview ![meter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/meter.svg)
 */
const Meter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 152l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm88 0l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm88 0l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24z" />
    </Icon>
);

export default Meter;