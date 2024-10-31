
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=sharp-solid light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 512L0 512 0 0 384 0l0 512zM96 416l192 0 0-320L96 96l0 320zm96 32a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-416a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 352l-128 0 0-128 128 0 0 128z" />
    </Icon>
);

export default LightSwitchOff;