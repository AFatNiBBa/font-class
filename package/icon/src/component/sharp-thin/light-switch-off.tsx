
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=sharp-thin light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l352 0 0 480L16 496zM0 512l16 0 352 0 16 0 0-16 0-480 0-16L368 0 16 0 0 0 0 16 0 496l0 16zM272 248l-160 0 0-136 160 0 0 136zM112 264l160 0 0 136-160 0 0-136zM96 416l16 0 160 0 16 0 0-16 0-288 0-16-16 0L112 96 96 96l0 16 0 288 0 16zm96 24a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-400a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM152 352l0-48 80 0 0 48-80 0zm-16 16l16 0 80 0 16 0 0-16 0-48 0-16-16 0-80 0-16 0 0 16 0 48 0 16z" />
    </Icon>
);

export default LightSwitchOff;