
import { Icon } from "../../index";

/**
 * A component that renders the `meter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter?s=sharp-thin meter}
 * @preview ![meter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/meter.svg)
 */
const Meter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM144 144l0 64 32 0 0-64-32 0zm-16-16l16 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-64 0-16zm112 16l0 64 32 0 0-64-32 0zm0-16l32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-64 0-16 16 0zm96 16l0 64 32 0 0-64-32 0zm-16-16l16 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-64 0-16z" />
    </Icon>
);

export default Meter;