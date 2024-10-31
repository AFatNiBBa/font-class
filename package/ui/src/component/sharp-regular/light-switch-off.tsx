
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=sharp-regular light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M168 464l0-16 48 0 0 16 120 0 0-416L216 48l0 16-48 0 0-16L48 48l0 416 120 0zM48 512L0 512l0-48L0 48 0 0 48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512zM240 256l0-112-96 0 0 112 96 0zM144 416l-48 0 0-48 0-224 0-48 48 0 96 0 48 0 0 48 0 224 0 48-48 0-96 0z" />
    </Icon>
);

export default LightSwitchOff;