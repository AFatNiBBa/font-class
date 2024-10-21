
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=sharp-solid toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 128L64 128l0 256 256 0 0-256zm64 320l-64 0L64 448 0 448l0-64L0 128 0 64l64 0 256 0 64 0 128 0 64 0 0 64 0 256 0 64-64 0-128 0zm0-320l0 256 128 0 0-256-128 0z" />
    </Icon>
);

export default ToggleLargeOff;