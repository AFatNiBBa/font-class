
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=sharp-light toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 128l0 256L32 384l0-256 512 0zm32-32l-32 0L32 96 0 96l0 32L0 384l0 32 32 0 512 0 32 0 0-32 0-256 0-32zM224 192l0 128L96 320l0-128 128 0zm32-32l-32 0L96 160l-32 0 0 32 0 128 0 32 32 0 128 0 32 0 0-32 0-128 0-32z" />
    </Icon>
);

export default ToggleOff;