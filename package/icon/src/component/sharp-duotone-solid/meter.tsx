
import { Icon } from "../../index";

/**
 * A component that renders the `meter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter?s=sharp-duotone-solid meter}
 * @preview ![meter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/meter.svg)
 */
const Meter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zm96 0l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zm96 0l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32z" />
    </Icon>
);

export default Meter;