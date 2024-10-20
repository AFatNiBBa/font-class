
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=sharp-light light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 464l0 16L32 480 32 32l144 0 0 16 0 16 32 0 0-16 0-16 144 0 0 448-144 0 0-16 0-16-32 0 0 16zM0 512l32 0 320 0 32 0 0-32 0-448 0-32L352 0 32 0 0 0 0 32 0 480l0 32zM96 272l0 112 0 32 32 0 128 0 32 0 0-32 0-112 0-32 0-112 0-32-32 0L128 96 96 96l0 32 0 112 0 32zm32-32l0-112 128 0 0 112-128 0zm0 32l128 0 0 112-128 0 0-112zm48 72l32 0 16 0 0-32-16 0-32 0-16 0 0 32 16 0z" />
    </Icon>
);

export default LightSwitchOff;