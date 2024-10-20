
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=sharp-solid light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM96 272l192 0 0 144L96 416l0-144zm0-32L96 96l192 0 0 144L96 240zM192 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default LightSwitch;