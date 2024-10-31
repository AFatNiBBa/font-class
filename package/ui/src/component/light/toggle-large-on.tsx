
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=light toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256zm0 288l-256 0C71.6 416 0 344.4 0 256S71.6 96 160 96l256 0c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-96-32c-38.9-29.2-64-75.7-64-128s25.1-98.8 64-128l-160 0C89.3 128 32 185.3 32 256s57.3 128 128 128l160 0z" />
    </Icon>
);

export default ToggleLargeOn;