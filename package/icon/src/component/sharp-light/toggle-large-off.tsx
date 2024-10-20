
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=sharp-light toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128l256 0 0 256L32 384l0-256zM288 416l32 0 224 0 32 0 0-32 0-256 0-32-32 0L320 96l-32 0L32 96 0 96l0 32L0 384l0 32 32 0 256 0zm32-32l0-256 224 0 0 256-224 0zM96 192l128 0 0 128L96 320l0-128zM64 160l0 32 0 128 0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0L96 160l-32 0z" />
    </Icon>
);

export default ToggleLargeOff;