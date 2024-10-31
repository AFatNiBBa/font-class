
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=sharp-regular light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M168 48l0 16 48 0 0-16 120 0 0 416-120 0 0-16-48 0 0 16L48 464 48 48l120 0zM48 0L0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-416 0-48L336 0 48 0zM240 256l0 112-96 0 0-112 96 0zM144 96L96 96l0 48 0 224 0 48 48 0 96 0 48 0 0-48 0-224 0-48-48 0-96 0z" />
    </Icon>
);

export default LightSwitchOn;