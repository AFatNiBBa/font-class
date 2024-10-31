
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=sharp-duotone-solid light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 256l0 160 192 0 0-160L96 256z" />
        <path d="M0 512l384 0L384 0 0 0 0 512zM96 96l192 0 0 320L96 416 96 96zm80 368a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0-416a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default LightSwitchOff;