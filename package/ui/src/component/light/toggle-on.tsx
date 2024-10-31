
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=light toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 128C89.3 128 32 185.3 32 256s57.3 128 128 128l256 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-256 0zM0 256C0 167.6 71.6 96 160 96l256 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-256 0C71.6 416 0 344.4 0 256zm480 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default ToggleOn;