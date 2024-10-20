
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=sharp-solid toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 128l0 256L64 384l0-256 448 0zm64-64l-64 0L64 64 0 64l0 64L0 384l0 64 64 0 448 0 64 0 0-64 0-256 0-64zM96 160l0 192 192 0 0-192L96 160z" />
    </Icon>
);

export default ToggleOff;