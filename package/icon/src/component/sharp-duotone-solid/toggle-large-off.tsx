
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=sharp-duotone-solid toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 448 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l256 0 192 0 0 256-192 0L64 384l0-256z" />
        <path d="M64 128h256v256H64V128z" />
    </Icon>
);

export default ToggleLargeOff;