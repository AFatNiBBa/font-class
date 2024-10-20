
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=sharp-duotone-solid light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 96l0 160 192 0 0-160L96 96z" />
        <path d="M0 0L384 0l0 512L0 512 0 0zM96 416l192 0 0-320L96 96l0 320zM208 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default LightSwitchOn;