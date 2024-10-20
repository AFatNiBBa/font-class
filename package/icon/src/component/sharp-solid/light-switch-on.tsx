
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=sharp-solid light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM96 96l192 0 0 320L96 416 96 96zm96-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64-320l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default LightSwitchOn;