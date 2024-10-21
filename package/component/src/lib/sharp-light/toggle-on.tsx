
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-light toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128l0 256 512 0 0-256L32 128zM0 96l32 0 512 0 32 0 0 32 0 256 0 32-32 0L32 416 0 416l0-32L0 128 0 96zm352 96l0 128 128 0 0-128-128 0zm-32-32l32 0 128 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-128 0-32z" />
    </Icon>
);

export default ToggleOn;