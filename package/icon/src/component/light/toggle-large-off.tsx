
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=light toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0 32l256 0c88.4 0 160-71.6 160-160s-71.6-160-160-160L160 96C71.6 96 0 167.6 0 256s71.6 160 160 160zm96-32c38.9-29.2 64-75.7 64-128s-25.1-98.8-64-128l160 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-160 0z" />
    </Icon>
);

export default ToggleLargeOff;