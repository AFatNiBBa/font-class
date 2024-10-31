
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=sharp-thin light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM272 264l-160 0 0 136 160 0 0-136zM112 248l160 0 0-136-160 0 0 136zM96 96l16 0 160 0 16 0 0 16 0 288 0 16-16 0-160 0-16 0 0-16 0-288 0-16zm96-56a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM152 160l0 48 80 0 0-48-80 0zm-16-16l16 0 80 0 16 0 0 16 0 48 0 16-16 0-80 0-16 0 0-16 0-48 0-16z" />
    </Icon>
);

export default LightSwitchOn;