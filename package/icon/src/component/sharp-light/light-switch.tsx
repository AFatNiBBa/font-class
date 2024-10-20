
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=sharp-light light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 48l0-16L32 32l0 448 144 0 0-16 0-16 32 0 0 16 0 16 144 0 0-448L208 32l0 16 0 16-32 0 0-16zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM96 240l0-112 0-32 32 0 128 0 32 0 0 32 0 112 0 32 0 112 0 32-32 0-128 0-32 0 0-32 0-112 0-32zm32 32l0 112 128 0 0-112-128 0zm0-32l128 0 0-112-128 0 0 112z" />
    </Icon>
);

export default LightSwitch;