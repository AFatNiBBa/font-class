
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=light toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-256 0C89.3 384 32 326.7 32 256s57.3-128 128-128l256 0zM576 256c0-88.4-71.6-160-160-160L160 96C71.6 96 0 167.6 0 256s71.6 160 160 160l256 0c88.4 0 160-71.6 160-160zm-352 0A64 64 0 1 1 96 256a64 64 0 1 1 128 0zM64 256a96 96 0 1 0 192 0A96 96 0 1 0 64 256z" />
    </Icon>
);

export default ToggleOff;